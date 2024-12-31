import React, { useEffect, useState } from "react";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import { deleteCategoryApi, deleteVideoApi, getAllVideoAPI, getCategories, saveCategory, updateCategoryApi } from "../services/allApi";
import Videocard from "./Videocard";

function Categories({setDeleteResponseFromCategory,deleteResponseFromView}) {
  const [allCategories,setAllCategories] = useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  useEffect(()=>{
    getAllCategories()
  },[deleteResponseFromView])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleCtegory =async ()=>{
     if(categoryName){
        const categoryDeatails ={categoryName,allVideos:[]}
        try{
           const result = await saveCategory(categoryDeatails)
           alert("Category created")
           getAllCategories()
           handleClose()
        }catch(e){
          console.log(e);
          
        }
     }else{
      alert("Please Enter Category name")
     }
    }

    const getAllCategories=async()=>{
     try{
           const result = await getCategories()
           if(result.status>=200 && result.status<300){
            setAllCategories(result.data)
           }
     }catch(e){
      console.log(e);
      
     }
    }

    // delete Category
    const removeCategory = async(id)=>{
     try{
        await deleteCategoryApi(id)
        getAllCategories()
     }catch(e){
      console.log(e);
      
     }
    }

    const dragOverCategory=(e)=>{
      e.preventDefault()
    }
   
    const videoCardDropOverCategory= async(e,categoryDeatails)=>{
      console.log("inside videoCardDropOverCategory ");
      console.log(categoryDeatails);
     const videoDetails= JSON.parse(e.dataTransfer.getData("videoDetails"))
      console.log(videoDetails);

      // update category by add video to its all videos
      categoryDeatails.allVideos.push(videoDetails)
      console.log(categoryDeatails);

      // api call
      await updateCategoryApi(categoryDeatails)
      getAllCategories()
      console.log(categoryDeatails);
      
      const result = await deleteVideoApi(videoDetails?.id)
      setDeleteResponseFromCategory(result)
     console.log(result);
         
     
    }

    const categoryVideoDragStarted=(e,dragVideoDetails, categoryDeatails)=>{
     console.log("insie categoryVideoDragStarted");
     let dragData= {video:dragVideoDetails,categoryDeatails}
     e.dataTransfer.setData("dragData",JSON.stringify(dragData))
    }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>All Categories</h3>
        <button
          onClick={handleShow}
          className="btn btn-info ms-3 rounded-circle fw-bolder"
        >
          +
        </button>
      </div>
      {/* Displaying all categories  */}
      <div className="container-fluid mb-3">
        {/* single categries */}
        {
          allCategories?.length>0 ?
          allCategories?.map(categoryDeatails=>(
            <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,categoryDeatails)} key={categoryDeatails?.id} className="border rounded p-3 mb-3">
          <div className="d-flex justify-content-between">
            <h5>{categoryDeatails?.categoryName}</h5>
            <button className="btn">
              <i onClick={()=>removeCategory(categoryDeatails?.id)} className="fa-solid fa-trash text-danger"></i>
            </button>
          </div>
          {/* Display category videos */}
          <div className="row mt-2" >
          {
            categoryDeatails?.allVideos?.length>0 &&
            categoryDeatails?.allVideos?.map(video=>(
              <div key={video?.id} className="col-lg-4" draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categoryDeatails)}>
              {/* video cards */}
              <Videocard insideCategory={true} displayData={video}/>
              </div>
            ))
          }
            
          </div>
        </div>
          )):<div className="text-danger">No Category Found</div>
        }
      </div>

      {/* modal */}
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details..!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCaption" label="Video Caption">
            <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Video Caption" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>handleCtegory()} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Categories;
