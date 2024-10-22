import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [name,setname]=useState('')


  const handlesubmit=()=>{
    if(name==''){
      toast.info('please complete the input field')
    }
  }
 
  
  return (
    <>
     <div className="row w-100 mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <h4 className='text-dark text-center mb-4'>Request Information</h4>
          <img src="https://images.squarespace-cdn.com/content/v1/555b76fce4b00e0c19144cca/c7629629-899d-40af-81a4-0a14c66d84f8/Villa_La_Joya_Wedding_Photographer_Playa_Del_Carmen5.jpg?format=1000w" alt="no image" className='w-100'/>
        </div>
        <div className="col-md-4 bg-info ms-3 p-3 mb-4">
       <div className='d-md-flex justify-content-between mt-4'>
          <FloatingLabel
          controlId="floatingInput"
          label="First Name"
          className="mb-3"
          value={name}
        >
          <Form.Control type="name" placeholder="First Name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Last Name"
          className="mb-3"
          value={name}
        >
          <Form.Control type="name" placeholder="Last Name" />
        </FloatingLabel>
       
       </div>

       <div className='d-md-flex justify-content-between mt-2' >
       <FloatingLabel
          controlId="floatingInput"
          label="Phone Number"
          className="mb-3"
          value={name}
        >
          <Form.Control type="number" placeholder="Phone Number" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="E-mail Address"
          className="mb-3"
          value={name}
        >
          <Form.Control type="e-mail" placeholder="E-mail Address " />
        </FloatingLabel>
       </div>

       <FloatingLabel  value={name}  label="How did you hear about us?">
      <Form.Select>
        <option>Choose Your Options</option>
        <option value="1">Blog Post</option>
        <option value="2">Event</option>
        <option value="3">Facebook</option>
        <option value="3">Google</option>

        <option value="3">Instagram</option>

        <option value="3">Online directory</option>

        <option value="3">Partner</option>

        <option value="3">Referral</option>

        <option value="3">Trade show</option>

        <option value="3">Word of mouth</option>

      </Form.Select>
    </FloatingLabel >

    <FloatingLabel  value={name} label="Job type?" className='mt-3'>
      <Form.Select>
        <option>Select Job Type</option>
        <option value="1">Wedding</option>
        <option value="2">Event</option>
        <option value="3">Commercial / Advertising</option>
        <option value="3">Other</option>
      </Form.Select>
    </FloatingLabel>
    
    <FloatingLabel
          controlId="floatingInput"
          label="Date of your event"
          className="mb-3 mt-3"
          value={name}
        >
          <Form.Control type="date" placeholder="" />
        </FloatingLabel>

        <FloatingLabel
        controlId="floatingTextarea"
        label="Where Will We shoot?"
        className="mb-3"
        value={name}
      >
        <Form.Control as="textarea" placeholder="Where Will We shoot?" />
      </FloatingLabel>

      <FloatingLabel
          controlId="floatingInput"
          label="Approx number of Attendees"
          className="mb-3"
          value={name}
        >
          <Form.Control type="number" placeholder="Approx number of Attendees" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Approx Budget"
          className="mb-3"
          value={name}
        >
          <Form.Control type="number" placeholder="Approx Budget" />
        </FloatingLabel>

        <FloatingLabel  value={name} controlId="floatingTextarea2" label="Additional Information">
        <Form.Control
          as="textarea"
          placeholder="Additional Information"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

<div className='d-flex justify-content-center align-items-center mt-3'>
        <Button type="submit" onClick={handlesubmit}>Submit form</Button>
 <ToastContainer position='top-center' autoClose={2000} theme="colored"/>
</div>      </div>
        <div className="col-md-2"></div>
     </div>
    </>
  )
}

export default Register
