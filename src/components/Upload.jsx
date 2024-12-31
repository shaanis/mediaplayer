import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { saveVideoAPI } from "../services/allApi";

const Upload = ({setAddResponseFromHome}) => {
  const [videoDetails, setvideoDetails] = useState({
    caption: "",
    imgUrl: "",
    youtubeLink: "",
  });
  const [invalidYoutubeLink, setinvalidYoutubeLink] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractYoutubeLink = (userInputYoutubeLink) => {
    // steps to create embded code
    if (userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")) {
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0,11)
      setinvalidYoutubeLink(false)
      setvideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
    } else {
      setinvalidYoutubeLink(true);
      setvideoDetails({...videoDetails,youtubeLink:""})
    }
  };

    
    const handleUploadVideo= async()=>{
      // object destructuring
      const {caption , imgUrl, youtubeLink} = videoDetails
      if(caption && imgUrl && youtubeLink){
         try{
          const result =  await saveVideoAPI(videoDetails)
         console.log(result);
         if(result.status>=200 && result.status<300){
          alert("video uploaded Successfully!!")
          handleClose()
          // pass the result to view component
          setAddResponseFromHome(result)
         }
         }catch(e){
           console.log(e);
           
         }
         
      }else{
        alert("Please fill all fields ")
      }
    }
     

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button
          onClick={handleShow}
          style={{
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="btn btn-warning text-center ms-3 rounded-circle fs-5 fw-bolder"
        >
          +
        </button>
      </div>
      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading video details..!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-5">
            <FloatingLabel
              className="mb-2"
              controlId="floatingCaption"
              label="Caption"
            >
              <Form.Control
                onChange={(e) =>
                  setvideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="caption"
              />
            </FloatingLabel>
            <FloatingLabel
              className="mb-2"
              controlId="floatingUrl"
              label="Image URL"
            >
              <Form.Control
                onChange={(e) =>
                  setvideoDetails({ ...videoDetails, imgUrl: e.target.value })
                }
                type="text"
                placeholder="Image URL"
              />
            </FloatingLabel>
            {console.log(videoDetails)}
            <FloatingLabel controlId="floatingLink" label="Video Youtube Link">
              <Form.Control
                onChange={(e) => extractYoutubeLink(e.target.value)}
                type="text"
                placeholder="Video Youtube Link"
              />
            </FloatingLabel>
            {
              invalidYoutubeLink && <div className="text-danger ">Invalid Youtube Link</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Upload;
