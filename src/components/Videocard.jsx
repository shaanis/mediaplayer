import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import {  deleteVideoApi, saveHistory } from '../services/allApi';

const Videocard = ({displayData, setDeleteVideo,insideCategory}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    // display modal
    setShow(true);
    // store history
    const {caption, youtubeLink} = displayData 
    const dateTime = new Date()
    console.log(dateTime );
    console.log(dateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp =dateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDetails = {caption,youtubeLink,timeStamp}

      try{
         await saveHistory(historyDetails)
      }catch(e){
        console.log(e);
        
      }
    
    
    
}
    
   const removeVideo= async (id)=>{
     try{
     const result = await deleteVideoApi(id)
      setDeleteVideo(result)
     }catch(e){
      console.log(e);
      
     }
     
   }

   const VideocardDragStarted=(e, dragVideoDetails)=>{
      console.log("inside videodragStarted video id: ",dragVideoDetails?.id);
      // share data using event drag start
      e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
   }

   

  return (
    <>
    <Card draggable={true} onDragStart={e=>VideocardDragStarted(e,displayData)} style={{ width: '14rem',gap:'10px', marginBottom:'10px'}} >
        <Card.Img onClick={handleShow} height={'150px'} variant="top" src={displayData?.imgUrl} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between align-items-start'>
          <p>{displayData?.caption}</p>
          {
            !insideCategory &&
            <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          }
        </Card.Text>
      </Card.Body>
    </Card> 



    {/* modal */}
    <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* video */}
          <iframe width="100%" height="360" src={`${displayData?.youtubeLink}?autoplay=1`} title="Caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard