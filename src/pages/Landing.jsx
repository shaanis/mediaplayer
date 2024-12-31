import React from "react";
import { Link } from "react-router-dom";
import landImg from "../assets/music.gif";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";
import {  Card } from "react-bootstrap";

const Landing = () => {
  return (
    <div style={{ paddingTop: "50px" }} className="container">
      {/* landing part */}
      <div className="row align-items-center mt-3">
        {/* text content */}
        <div className="col-lg-5">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Media Player App will allow user to add or remove their uploaded
            videos from youTube and also allow them to arrange it in different
            categories by drag and drop. User can also have the provision to
            manage their watch history as well. What are you waiting for, let
            starts exploring our site!!!
          </p>
          <Link to={"/home"} className="btn btn-info">
            Get Started
          </Link>
        </div>
        <div className="col"></div>
        {/* Landing image */}
        <div className="col-lg-6">
          <img
            style={{ height: "300px", width: "500px", paddingLeft: "200px" }}
            src={landImg}
            className="img-fluid ms-5"
            alt=""
          />
        </div>
      </div>
      {/* feature part */}
      <div className="my-5">
        <h3 className="text-center mb-5">Features</h3>
      
      <div className="row container  ">
        <div className="col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={feature1} />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={feature2} />
            <Card.Body>
              <Card.Title>Categories Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={feature3} />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    {/* last */}
    <div className="my-5 row align-items-center border rounded p-5">
      {/* text content */}
       <div className="col-lg-5">
        <h3>Simple, Fast and Powerful</h3>
        <p style={{textAlign:'justify'}}><span className="fs-5 fw-bolder">Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p style={{textAlign:'justify'}}><span className="fs-5 fw-bolder">Categories Videos:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p style={{textAlign:'justify'}}><span className="fs-5 fw-bolder">Manage Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
       </div>
       <div className="col"></div>
       {/* youtube video */}
       <div className="col-lg-6">
       <iframe width="100%" height="480" src="https://www.youtube.com/embed/bKBPs19IQuU" title="Mountains Of Friendship Nasheed Sped Up and Repeated" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       </div>
    </div>
    </div>
  );
};

export default Landing;
