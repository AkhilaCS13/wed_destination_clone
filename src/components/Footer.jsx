import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faPinterestP, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>

<div className='text-center'>
        <Link to={'/register'}><button  className=' btn bg-info text-light mt-md-4 mb-4'>LEARN MORE</button></Link>
        <div>
          <button style={{border:'none' , background:'transparent'}} className=' mx-2'><FontAwesomeIcon icon={faFacebookF} size='lg' /></button>
          <button style={{border:'none' , background:'transparent'}} className=' mx-2'><FontAwesomeIcon icon={faInstagram} size='lg'/></button>
          <button style={{border:'none' , background:'transparent'}} className=' mx-2'><FontAwesomeIcon icon={faPinterestP} size='lg'/></button>
          <button style={{border:'none' , background:'transparent'}} className=' mx-2'><FontAwesomeIcon icon={faTiktok} size='lg'/></button>
  
        </div>

      </div>

      <div className='row w-100  text-center text-dark mt-4'>
        <div className="col-md-2"></div>
        <div className='col-md-8'>
          <p >Subscribe</p>
          <p>Sign up with your E-mail address to receive news and updates.</p>
          <div className='d-md-flex justify-content-center align-items-center'>
          <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className='mb-2'
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <button className='btn bg-dark text-light ms-4 '>SIGN UP</button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className='container-fluid  p-5 bg-dark text-center mt-4'>
        <a href="" className='text-light'>Take Action</a>
        <p className='text-light p-4'>E.Whitney Photo, 713 Calle 48 Nte, Playa del Carmen, Q.R., 77728, Mexico   973-866-6502   ewhitney1023@icloud.com</p>
        <p className='text-light p-3'>
          powered by <a href="" className='text-light'>squarespace</a>
        </p>


      </div>
    </>
  )
}

export default Footer
