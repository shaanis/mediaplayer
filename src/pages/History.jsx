import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistory } from '../services/allApi'

const History = () => {
    const [allVideoHistory,setAllVideoHistory]  =useState([])
    useEffect(()=>{
      getAllVideoHistory()
    },[])

   const getAllVideoHistory=async()=>{
    try{
       const result = await getHistory()
       if(result.status >=200 && result.status<300){
        setAllVideoHistory(result.data)
       }else{
        console.log(result);
        
       }
    }catch(e){
      console.log(e);
      
    }
   }
   
   

   const removeHistory = async(id)=>{
     try{
        await deleteHistoryApi(id)
        getAllVideoHistory()
        console.log("video details :" ,videoDetails);
     }catch(e){
      console.log(e);
      
     }
   }
  return (
    <div style={{padding:'100px'}}>
      <div className="d-flex justify-content-between container">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className='container my-5 table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>...</th>
          </tr>
        </thead> 
        <tbody>
          {  allVideoHistory?.length>0?
             allVideoHistory?.map((videoDetails,index)=>(
              <tr key={videoDetails.id}>
            <td>{index+1}</td>
            <td>{videoDetails.caption}</td>
            <td>{videoDetails.youtubeLink}</td>
            <td>{videoDetails.timeStamp}</td>
            <td><button onClick={()=>removeHistory(videoDetails?.id)} className='btn ' ><i class="fa-solid fa-trash  text-danger"></i></button></td>
          </tr>
             )):
             <div>No History found</div>
          }
        </tbody>
      </table>
    </div>
  )
}

export default History