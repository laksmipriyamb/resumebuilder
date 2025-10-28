import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center text-center'>
      <div className='mb-5'>
        {/* <p style={{fontSize:'20px'}}><span style={{color:'orange',fontWeight:'700'}}>4</span>0<span style={{color:'orange',fontWeight:'700'}}>4</span></p> */}
        <img src="https://assets.dochipo.com/editor/animations/404-error/986fdadf-8dc2-4a46-aea7-8f9002ebaed0.gif" alt="No image" />
        <h4>Sorry,we couldn't find this <br />page.</h4>
        <Link to={'/'} style={{backgroundColor:'orange'}} className='btn text-white fs-5 px-5'>Back to homepage</Link>
      </div>
    </div>
  )
}

export default PageNotFound