import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div>
      <h2 className='text-center my-5'>Create a Job-Winning Resume in Minutes</h2>
      <div style={{ height: '60vh' }} className="container row justify-content-center align-items-center">
        <div className="col-md-2"></div>
        <div className="col-md-4 border shadow rounded p-5 text-center me-5">
          <IoDocumentTextOutline className='text-primary fs-2 mb-4' />
          <h4>Add your Information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
        </div>

        <div className="col-md-4 border shadow rounded p-5 text-center ms-5">
          <FaFileDownload className='text-danger fs-2 mb-4' />
          <h4>Download your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>
        </div>
        <div className="col-md-2"></div>


      </div>
      <div className='text-center ms-5'>
        <Link to={'/form'} className='btn text-white mb-5' style={{ backgroundColor: 'orange' }}>LET'S START</Link>

      </div>
    </div>
  )
}

export default ResumeGenerator