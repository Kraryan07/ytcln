import React, { useEffect, useState } from 'react'
import './Recommended.css'

import { api_key } from '../../Data'
import { converter } from '../../Data'
import { Link } from 'react-router-dom'
const Recommended = ({categoryId}) => {

  const[apidata,setapidata]=useState([])
  const fetchdata=async()=>{
    const related_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${api_key}`
    await fetch(related_url).then(res=>res.json()).then(data=>setapidata(data.items));
  }

  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div className='recommended'>
      {apidata.map((item,index)=>{
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.medium.url} alt=""/>
          <div className="vid-info">
            <h4>{item.snippet.title}</h4> 
            <p>{item.snippet.channelTitle}</p>
            <p>{converter(item.statistics.viewCount)} views</p>
          </div>
        </Link>
        )
      })}
        
    </div>
  )
}

export default Recommended
