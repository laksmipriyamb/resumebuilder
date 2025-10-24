import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div style={{height:'300px', backgroundColor:'orange'}} className='d-flex justify-content-center align-items-center'>
      <div className='text-center text-light'>
        <h2 className='fw-bold'>Contact Us</h2>
        <h5><MdAttachEmail className='mx-2' />resumebuilder@gmail.com</h5>
        <h5><FaPhoneAlt className='mx-2'/>9987365722</h5>
        <h4>Connect with us</h4>
        <div className='d-flex justify-content-center align-items-center my-3'>
          <IoLogoWhatsapp  className='mx-2 fs-4'/>
          <FaFacebook className='mx-2 fs-4'/>
          <RiInstagramFill className='mx-2 fs-4'/>
        </div>
      </div>
    </div>
  )
}

export default Footer