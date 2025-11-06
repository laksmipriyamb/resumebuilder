import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

//resume add api-called by UserInputs when finish btn clicked
export const addResumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}
//get resume api - called from viewResume,when page load()
export const getResumeAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}
//update resume api
//add history api
//get history api
//remove history api