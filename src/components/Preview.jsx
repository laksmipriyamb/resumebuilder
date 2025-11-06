import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview({resumeDetails}) {
  return (
    <div style={{ margin: '70px' }} className='shadow p-5 w-100 rounded text-center'>
      <h3>{resumeDetails?.username}</h3>
      <h4>{resumeDetails?.jobTitle}</h4>
      <h6><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|<span className='mx-2'>{resumeDetails?.mobile}</span></h6>
      <p className='my-2'>
        <a href={resumeDetails?.github} target='_blank' className='mx-1'>GITHUB</a> |
        <a href={resumeDetails?.linkedin} target='_blank' className='mx-1'>LINKEDIN</a> |
        <a href={resumeDetails?.portfolio} target='_blank' className='mx-1'>PORTFOLIO</a>
      </p>
      <Divider sx={{ fontSize: '20px', fontWeight: '600' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>
        {resumeDetails?.summary}
      </p>
      <Divider sx={{ fontSize: '20px', fontWeight: '600' }}>Education</Divider>
      <h6 className="mt-2">{resumeDetails?.course}</h6>
      <p><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span className='mx-2'>{resumeDetails?.passoutyear}</span></p>
      <Divider sx={{ fontSize: '20px', fontWeight: '600' }}>Professional Experience</Divider>
      <h6 className="mt-2">{resumeDetails?.jobType}</h6>
      <p><span className='mx-2'>{resumeDetails?.company}</span>|<span className='mx-2'>{resumeDetails?.cLocation}</span>|<span className='mx-2'>{resumeDetails?.duration}</span></p>
      <Divider sx={{ fontSize: '20px', fontWeight: '600' }}>Skills</Divider>
      <div className="d-flex flex-wrap justify-content-between my-3">
        {
          resumeDetails?.userSkills?.map((item,index)=>(
            <Button key={index} variant='contained' className='m-1'>{item}</Button>
          ))
        }
      </div>
    </div>
  )
}

export default Preview