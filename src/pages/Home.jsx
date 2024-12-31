import React, { useState } from 'react'
import Upload from'../components/Upload'
import { Link } from 'react-router-dom'
import Views from '../components/Views'
import Categories from '../components/Categories'


const Home = () => {
  const [deleteResponseFromView,setDeleteResponseFromView] =useState("")
  const [deleteResponseFromCategory, setDeleteResponseFromCategory] = useState("")
  const [addResponseFromHome,setAddResponseFromHome ] = useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className='d-flex justify-content-between container mb-5'>
       <Upload setAddResponseFromHome={setAddResponseFromHome}/>
       <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <Views setDeleteResponseFromView={setDeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome={addResponseFromHome}/>
        </div>
        <div className="col-lg-6">
          <Categories deleteResponseFromView={deleteResponseFromView}  setDeleteResponseFromCategory={setDeleteResponseFromCategory}/>
        </div>

      </div>
    </div>
  )
}

export default Home