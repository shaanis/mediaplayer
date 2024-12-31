import React from 'react'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
          {/* intro */}
          <div style={{ width:'370px'}}>
            <h5>
            <i class="fa-solid fa-music me-3"></i>
            Media player
            </h5>
            <p>Designed and built with all the love in the world by the Media team with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>
          {/* Links  */}
           <div className='d-flex flex-column'>
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home page</Link>
            <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>Watch History</Link>
           </div>
          {/* Guides  */}
          <div className='d-flex flex-column'>
            <h5>Guides</h5>
            <a href='https://react.dev/' target='blank' style={{textDecoration:'none', color:'white'}}>React</a>
            <a href='https://react-bootstrap.github.io/' target='blank'  style={{textDecoration:'none', color:'white'}}>React Bootstrap</a>
            <a href='https://reactrouter.com/' target='blank'  style={{textDecoration:'none', color:'white'}}>React Router</a>
           </div>
          {/* Contact */}
          <div className="d-flex flex-column">
           <h5>Contact us</h5>
           <div className='d-flex '>
            <input className='form-container me-2 rounded ps-2' type="text" placeholder='Enter yor Email' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
           </div>
           <div className='d-flex justify-content-between mt-2'>
              <a style={{textDecoration:'none', color:'white'}}  href="" target='blank'><i class="fa-brands fa-twitter"></i></a>
              <a style={{textDecoration:'none', color:'white'}} href="https://www.instagram.com/spotify/" target='blank'><i class="fa-brands fa-instagram"></i></a>
              <a style={{textDecoration:'none', color:'white'}}  href="" target='blank'><i class="fa-brands fa-whatsapp"></i></a>
              <a style={{textDecoration:'none', color:'white'}}  href="" target='blank'><i class="fa-brands fa-linkedin"></i></a>
              <a style={{textDecoration:'none', color:'white'}}  href="" target='blank'><i class="fa-brands fa-facebook"></i></a>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Footer