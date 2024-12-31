import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideoAPI, saveVideoAPI, updateCategoryApi } from '../services/allApi'


const Views = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {
  const[deleteVideo,setDeleteVideo] = useState('')
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
     getAllVideos()
  },[addResponseFromHome, deleteVideo,deleteResponseFromCategory,setDeleteResponseFromView])
  
    
  const getAllVideos = async()=>{
    try{
      const result = await getAllVideoAPI()
      console.log(result);
      if(result.status >=200 && result.status<300){
       
        setAllVideos(result.data)
        
      }

    }catch(e){
      console.log(e);
      
    }
    
  }
  
  const dragOverView=(e)=>{
    e.preventDefault()
  }

   const CategoryVideoDragOverVeiw=async(e)=>{
    console.log("inside CategoryVideoDragOverVeiw");
    const {video, categoryDeatails}=JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDeatails);
    const updatedCategoryVideoList= categoryDeatails?.allVideos?.filter(item=>item?.id != video?.id)
    const updatedCategory= {...categoryDeatails,allVideos:updatedCategoryVideoList}
    console.log(updatedCategory);
    
    // updating the category by delte video from category
    const result = await updateCategoryApi(updatedCategory)
    // use state lifting to communicate data from view to category
    setDeleteResponseFromView(result)
    // use api to upload video
    await saveVideoAPI(video)
    // call getAllVideos function
    getAllVideos()
    
   }
  return (
    <>
       <Row droppable="true" onDragOver={dragOverView} onDrop={e=>CategoryVideoDragOverVeiw(e)}>
       {
        allVideos?.length>0?
        allVideos.map(videos=>(
          <Col key={videos?.id} sm={12} md={6} lg={4}>
          <Videocard displayData={videos} setDeleteVideo={setDeleteVideo}/>
        </Col>
        )): <div>No Videos Uploaded...</div>
       }
       </Row>
    </>
  )
}

export default Views