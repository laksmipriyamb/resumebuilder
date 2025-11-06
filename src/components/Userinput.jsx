import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { IoMdClose } from "react-icons/io";
import { addResumeAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';


const steps = ['Basic Informations', 'Contact Details', 'Education Details','Work Experience','Skills & Certifications','Review & Submit'];


function Userinput({resumeDetails,setResumeDetails}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const skillSuggestionarray = ['NODE JS','MONGODB','REACT','EXPRESS JS','ANGULAR','LEADERSHIP','COMMUNICATION','DECISION MAKING','PROBLEM SOLVING']
  
  //refernece o skill input tag
const skillRef = React.useRef()
//to navigate
const navigate = useNavigate()

  console.log(resumeDetails);
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //tos add skill that inputed in the text field
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

  const renderSteps = (stepCount)=>{
    switch(stepCount){
        case 0 : return(
            <div>
                <h3>Personal Details</h3>
                <div className="row p-3">
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                    <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                </div>
            </div>
        )
        case 1 : return(
            <div>
                <h3>Contact Details</h3>
                <div className="row p-3">
                    <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                    <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-mobile" label="Phone Number" variant="standard" />
                    <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                    <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                    <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                </div>
            </div>
        )
        case 2 : return(
            <div>
                <h3>Education Details</h3>
                <div className="row p-3">
                    <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-coursename" label="Course Name" variant="standard" />
                    <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-collegename" label="College Name" variant="standard" />
                    <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                    <TextField value={resumeDetails.passoutyear} onChange={e=>setResumeDetails({...resumeDetails,passoutyear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                </div>
            </div>
        )
        case 3 : return(
            <div>
                <h3>Professional Details</h3>
                <div className="row p-3">
                    <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-joborintern" label="Job or Internship" variant="standard" />
                    <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-companyname" label="Company Name" variant="standard" />
                    <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic-companylocation" label="Company Location" variant="standard" />
                    <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                </div>
            </div>
        )
        case 4 : return(
            <div>
                <h3>Skills</h3>
                <div className="d-flex justify-content-center align-items-center p-3 w-100">
                  <input ref={skillRef} type="text" placeholder='Add skills' className='w-100 ps-1 py-2 border border-none' />
                  <Button onClick={()=>addskill(skillRef.current.value)} variant='text'>ADD</Button>
                </div>
                <h5>Suggestions</h5>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  {
                    skillSuggestionarray.map((item,index)=>(
                      <Button onClick={()=>addskill(item)} key={index} variant='outlined' className='m-2'>{item}</Button>
                    ))
                  }
                </div>
                <h5>Added skills:</h5>
                <div className="d-flex flex-wrap justify-content-between my-3">
                  {
                    resumeDetails.userSkills.length>0?
                      resumeDetails.userSkills?.map((skill,index)=>(
                        <Button key={index} variant='contained' className='m-1'>{skill}<IoMdClose onClick={()=>removeSkills(skill)} className='ms-2' /></Button>
                      ))
                      :
                      <p className='fw-bolder'>No skills are added yet</p>
                  }
                  
                </div>
            </div>
        )
        case 5 : return(
            <div>
                <h3> Summary</h3>
                <div className="p-3 row">
                  <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})}  id="standard-basic-summary" label="Write a short summary of yourself" variant="standard" multiline rows={7} defaultValue={'Passionate and detail-oriented MERN Stack Developer with strong expertise in developing dynamic, user-friendly, and data-driven web applications. Proficient in JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB. '}/>
                </div>
            </div>
        )
    }
  }

  const handleAddResume = async ()=>{
    const {username,jobTitle,location} = resumeDetails
    if(!username && !jobTitle && !location){
      alert("Please fill the form completely...")
    }else{
      //api
      console.log("Api Call");
      try{
        const result = await addResumeAPI(resumeDetails)
        console.log(result);
        if(result.status==201){
          alert("Resume added successfully!!!")
          const {id} =result.data
          //success redirect view page
          navigate(`/resume/${id}/view`)
        }
        
      }catch(error){
        console.log(error);
        
      }
      //success redirect view page
    }
    
    
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render contents according to step */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ? <Button onClick={handleAddResume}>Finish</Button> : <Button onClick={handleNext}>Next</Button>}
            
            
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Userinput