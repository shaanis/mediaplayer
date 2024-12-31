import commonApi from "./commonApi"
import SERVERURL from "./serverUrl"

// saveVideo - post http request, add component
export const saveVideoAPI = async(videoDetails)=>{
 return await commonApi("POST",`${SERVERURL}/uploadVideos`,videoDetails)
}


// getAllVideos
export const getAllVideoAPI = async()=>{
    return await commonApi("GET",`${SERVERURL}/uploadVideos`,"")
}


//Save history - post method to http://localhost:3000/history called by videocard when we click on video
export const saveHistory = async (historyDetails)=>{
    return await commonApi('POST',`${SERVERURL}/history`,historyDetails)
}

// getHistory - get http request to http://localhost:3000/history called by history component when it open in browser
export const getHistory = async()=>{
    return await commonApi('GET',`${SERVERURL}/history`,"")
}

// Delete history - DELETE http method http://localhost:3000/history/id called by history component 
export const deleteHistoryApi = async(id)=>{
    return await commonApi('DELETE',`${SERVERURL}/history/${id}`,{})
}
// Delete history - DELETE http method http://localhost:3000/history/id called by videocard component 
export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${SERVERURL}/uploadVideos/${id}`,{})
}

// SaveCategory  -post request http://localhost:3000/categories called by categoriy component when user click on add btn
// categoryDetails ={categoryName,allVideos}
export const saveCategory = async(categoryDetails)=>{
    return await commonApi('POST',`${SERVERURL}/categories`,categoryDetails)
}

// get Category 
export const getCategories =async()=>{
    return await commonApi('GET',`${SERVERURL}/categories`,{})
}

// Delete category - DELETE http method http://localhost:3000/categories/id called by categories  component 
export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${SERVERURL}/categories/${id}`,{})
}

// update category - PUT http method http://localhost:3000/categories/id called by categories component 
export const updateCategoryApi = async(categoryDetails)=>{
    return await commonApi('PUT',`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}