import { faFacebookF, faInstagram, faPinterestP, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';




function Header() {
 const [show , setshow]=useState(false)

 const handleClose = () => {
  setshow(false);
 
}
const handleShow=()=>{
  setshow(true)
}

const handleCancel=()=>{
  setshow(false)
}

  return (
    <>


{['xxl'].map((expand) => (
        <Navbar 
         key={expand} expand={expand} variant='elavation-12' className="container-fluid shadow-lg bg-body-tertiary mb-3">
          <Container fluid>
            <Link to={'/'}><Navbar.Brand href="#" className='ps-3 ms-5 pb-3'><img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/f1674967-1094-4b56-9a0e-90ab4b6e2ba0/studio-5.png?format=1500w" width={'120px'} className='shadow' alt="" /></Navbar.Brand></Link>
            <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/f1674967-1094-4b56-9a0e-90ab4b6e2ba0/studio-5.png?format=1500w" alt="no image" width={'50px'} height={'50px'}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="links justify-content-center flex-grow-1 align-items-center pe-3">
                  <Link to={'/'} style={{textDecoration:'none'}}><Nav.Link href="#Home" onClick={handleCancel}>HOME</Nav.Link></Link>
                  <Link to={'/wedding'} style={{textDecoration:'none'}}><Nav.Link href="#action2" onClick={handleCancel}>WEDDINGS</Nav.Link></Link>
                  <Link to={'/engage'} style={{textDecoration:'none'}}><Nav.Link href="#action2" onClick={handleCancel}>ENGAGEMENTS</Nav.Link></Link>
                  <Link to={'/family'} style={{textDecoration:'none'}}><Nav.Link href="#action2" onClick={handleCancel}>FAMILY</Nav.Link></Link>
                    <div className='icons p-md-2 ms-md-5'>
                    
                      <button  className='butn mx-2' onClick={handleCancel}><FontAwesomeIcon icon={faFacebookF} /></button>
                      <button className='butn mx-2' onClick={handleCancel}><FontAwesomeIcon icon={faInstagram}  /></button>
                      <button className='butn mx-2' onClick={handleCancel}><FontAwesomeIcon icon={faPinterestP}  /></button>
                      <button className='butn mx-2' onClick={handleCancel}><FontAwesomeIcon icon={faTiktok}  /></button>
                    </div>

                    <Link to={'/register' }><Button onClick={handleCancel} id='takeaction' className='takeaction ms-md-5 text-light'>TAKE ACTION</Button></Link>

                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header
