import React, { useEffect, useState } from 'react'
import Preview from "../components/Preview"
import { resume } from 'react-dom/server'
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI'
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import Edit from '../components/Edit'


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

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-9 col-12">
            <div className="d-flex justify-content-center align-items-center mt-5 ms-5">
              <button className="text-success btn fs-4"><FaFileDownload /></button>
              <Edit resumeDetails={resume} setResumeDetails={setResume} />
              <Link to={'/history'} className="text-primary btn fs-4"><FaHistory /></Link>
              <Link to={'/resume'} className="text-danger btn fs-4"><FaBackward /></Link>
            </div>
            <Preview resumeDetails={resume} />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default ViewResume