import React, { useEffect, useState } from 'react'
import Preview from "../components/Preview"
import { resume } from 'react-dom/server'
import { Link, useParams } from 'react-router-dom'
import { addHistoryAPI, getResumeAPI } from '../services/allAPI'
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import Edit from '../components/Edit'
import {jsPDF} from "jspdf"
import html2canvas from 'html2canvas'


function ViewResume() {
  const { id } = useParams()
  console.log(id);
  const [resume, setResume] = useState({})

  useEffect(() => {
    getResumeDetails()
  }, [])

  const getResumeDetails = async () => {
    const result = await getResumeAPI(id)
    console.log(result);
    if (result.status == 200) {
      setResume(result.data)
    }

  }
  //download
  const handleDownloadResume = async ()=>{
    //create pdf document (install and import jsPDF)
    const doc = new jsPDF();
    const preview = document.getElementById("preview")
    //screenshot of preview - html2canvas
    const canvas = await html2canvas(preview,{scale:2})
    // console.log(canvas);
    //convert canvas ti image
    const resumeImg = canvas.toDataURL('image/png')
    // console.log(resumeImg);
     
    //add screeshot to pdf
    const pageWidth = doc.internal.pageSize.getWidth()
    // const pageHeight = doc.internal.pageSize.getHeight()

    const imgWidth = pageWidth-20  //these 2 steps is not compulsory
    const imgHeight = canvas.height*imgWidth/canvas.width
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
    //download pdf
    doc.save(`${resume.username}-resume.pdf`)
    //local time data = new Date
    const localTimeData = new Date()
    // console.log(localTimeData);
    const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
    //console.log(timeStamp);
    try{
      await addHistoryAPI({timeStamp,resumeImg})
    }catch(err){
      console.log(err);
      
    }
    
  }

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-9 col-12">
            <div className="d-flex justify-content-center align-items-center mt-5 ms-5">
              <button onClick={handleDownloadResume} className="text-success btn fs-4"><FaFileDownload /></button>
              <Edit resumeDetails={resume} setResumeDetails={setResume} />
              <Link to={'/history'} className="text-primary btn fs-4"><FaHistory /></Link>
              <Link to={'/resume'} className="text-danger btn fs-4"><FaBackward /></Link>
            </div>
            <div id='preview'><Preview resumeDetails={resume} /></div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default ViewResume