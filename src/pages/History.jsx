import { Box, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";

function History() {
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{ marginTop: '-80px',color:'orange' }}>Back<FaArrowCircleRight style={{color:'orange'}} /></Link>
      <Box component="section" className='container-fluid'>
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
              <div className="d-flex justify-content-between align-items-center">
                <h6>Review At: date,time</h6>
                <button className='btn text-danger fs-4 pb-3'><MdDelete /></button>
              </div>
              <div className="border rounded p-3">
                <img src="https://marketplace.canva.com/EAGmJ13p8zE/1/0/1131w/canva-black-and-white-minimalist-professional-resume-a4-X9UHTVTOsqQ.jpg" alt="resume" className="img-fluid" />
              </div>

            </Paper>
          </div>
        </div>

      </Box>
    </div>
  )
}

export default History