import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar2/Sidebar'
import Feed from '../../components/Feed/Feed'
function Home({sidebar}) {
  const[category,setcategory]=useState(0)
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home
