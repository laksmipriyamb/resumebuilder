import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div style={{ margin: '80px' }} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h4>Job Title</h4>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E-mail</span>|<span className='mx-2'>Mobile</span></h6>
      <p className='my-2'>
        <a href="" target='_blank' className='mx-1'>GITHUB</a> |
        <a href="" target='_blank' className='mx-1'>LINKEDIN</a> |
        <a href="" target='_blank' className='mx-1'>PORTFOLIO</a>
      </p>
      <Divider sx={{ fontSize: '20px', fontWeight: '600' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quisquam quaerat repellendus reiciendis molestias dolor impedit debitis porro veniam eius unde quas qui suscipit harum dolorem totam, vero ullam numquam.
      </p>
      <Divider sx={{ fontSize: '20px', fontWeight: '600' }}>Education</Divider>
      <h6 className="mt-2">Course name</h6>
      <p><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout year</span></p>
      <Divider sx={{ fontSize: '20px', fontWeight: '600' }}>Professional Experience</Divider>
      <h6 className="mt-2">Job / Internship</h6>
      <p><span className='mx-2'>company name</span>|<span className='mx-2'>company location</span>|<span className='mx-2'>duration</span></p>
      <Divider sx={{ fontSize: '20px', fontWeight: '600' }}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">
        <Button variant='contained' className='m-1'>NODE JS</Button>
      </div>
    </div>
  )
}

export default Preview