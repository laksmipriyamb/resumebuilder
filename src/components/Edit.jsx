import React, { useState,useRef } from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { IoMdClose } from "react-icons/io";
import { updateResumeAPI } from '../services/allAPI';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({ resumeDetails, setResumeDetails }) {
    const [open, setOpen] = useState(false)
    const skillRef = useRef()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addskill = (skill)=>{
    if(resumeDetails.userSkills.includes(skill)){
      alert("The given skill already added,Please add another one!!!")
    }else{
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      //to clear text field
      skillRef.current.value=""
    }
  }

  const removeSkills=(skill)=>{
    setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
  }

  const handleResumeUpdate = async ()=>{
    const {id,username,jobTitle,location} = resumeDetails
    if(!username && !jobTitle && !location){
        alert("Please fill the form Completely...")
    }else{
        //api
        console.log("API call");
        try{
            const result = await updateResumeAPI(id,resumeDetails)
        console.log(result);
        if(result.status==200){
            alert("Resume updated successfully!!!")
            handleClose()
        }
        }catch(err){
            console.log(err);
            
        }
        
        
    }
    
  }

    return (
        <div>
            <button onClick={handleOpen} className="text-warning btn fs-4"><FaEdit /></button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" sx={{ fontSize: '25px', fontWeight: '500' }} component="h2">
                        Edit Resume Details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Personel details */}
                        <div>
                            <h5>Personal Details</h5>
                            <div className="row p-3">
                                <TextField value={resumeDetails.username} onChange={e => setResumeDetails({ ...resumeDetails, username: e.target.value })} id="standard-basic-name" label="Full Name" variant="standard" />
                                <TextField value={resumeDetails.jobTitle} onChange={e => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} id="standard-basic-job" label="Job Title" variant="standard" />
                                <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id="standard-basic-location" label="Location" variant="standard" />
                            </div>
                        </div>
                        {/* contact details */}
                        <div>
                            <h5>Contact Details</h5>
                            <div className="row p-3">
                                <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} id="standard-basic-email" label="Email" variant="standard" />
                                <TextField value={resumeDetails.mobile} onChange={e => setResumeDetails({ ...resumeDetails, mobile: e.target.value })} id="standard-basic-mobile" label="Phone Number" variant="standard" />
                                <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                                <TextField value={resumeDetails.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                                <TextField value={resumeDetails.portfolio} onChange={e => setResumeDetails({ ...resumeDetails, portfolio: e.target.value })} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                            </div>
                        </div>
                        {/*education details  */}
                        <div>
                            <h5>Education Details</h5>
                            <div className="row p-3">
                                <TextField value={resumeDetails.course} onChange={e => setResumeDetails({ ...resumeDetails, course: e.target.value })} id="standard-basic-coursename" label="Course Name" variant="standard" />
                                <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} id="standard-basic-collegename" label="College Name" variant="standard" />
                                <TextField value={resumeDetails.university} onChange={e => setResumeDetails({ ...resumeDetails, university: e.target.value })} id="standard-basic-university" label="University" variant="standard" />
                                <TextField value={resumeDetails.passoutyear} onChange={e => setResumeDetails({ ...resumeDetails, passoutyear: e.target.value })} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                            </div>
                        </div>
                        {/* professtional details */}
                        <div>
                            <h5>Professional Details</h5>
                            <div className="row p-3">
                                <TextField value={resumeDetails.jobType} onChange={e => setResumeDetails({ ...resumeDetails, jobType: e.target.value })} id="standard-basic-joborintern" label="Job or Internship" variant="standard" />
                                <TextField value={resumeDetails.company} onChange={e => setResumeDetails({ ...resumeDetails, company: e.target.value })} id="standard-basic-companyname" label="Company Name" variant="standard" />
                                <TextField value={resumeDetails.cLocation} onChange={e => setResumeDetails({ ...resumeDetails, cLocation: e.target.value })} id="standard-basic-companylocation" label="Company Location" variant="standard" />
                                <TextField value={resumeDetails.duration} onChange={e => setResumeDetails({ ...resumeDetails, duration: e.target.value })} id="standard-basic-duration" label="Duration" variant="standard" />
                            </div>
                        </div>
                        {/* skills */}
                        <div>
                            <h3>Skills</h3>
                            <div className="d-flex justify-content-center align-items-center p-3 w-100">
                                <input ref={skillRef} type="text" placeholder='Add skills' className='w-100 ps-1 py-2 border border-none' />
                                <Button onClick={() => addskill(skillRef.current.value)} variant='text'>ADD</Button>
                            </div>
                            
                            <h5>Added skills:</h5>
                            <div className="d-flex flex-wrap justify-content-between my-3">
                                {
                                    resumeDetails.userSkills?.length > 0 ?
                                        resumeDetails.userSkills?.map((skill, index) => (
                                            <Button key={index} variant='contained' className='m-1'>{skill}<IoMdClose onClick={() => removeSkills(skill)} className='ms-2' /></Button>
                                        ))
                                        :
                                        <p className='fw-bolder'>No skills are added yet</p>
                                }

                            </div>
                        </div>
                        {/* summary */}
                        <div>
                            <h5> Summary</h5>
                            <div className="p-3 row">
                                <TextField onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={7} defaultValue={'Passionate and detail-oriented MERN Stack Developer with strong expertise in developing dynamic, user-friendly, and data-driven web applications. Proficient in JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB. '} />
                            </div>
                        </div>
                        <div onClick={handleResumeUpdate} className='text-center'>
                            <button className="btn btn-warning text-white">Update</button>
                            </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default Edit