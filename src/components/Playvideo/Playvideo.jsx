import React, { useEffect, useState } from 'react'
import'./Playvideo.css'
// import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import share from '../../assets/share.png'
import dislike from '../../assets/dislike.png'
import save from '../../assets/save.png'
// import jack from '../../assets/jack.png'
// import user_prof from '../../assets/user_profile.jpg'
import { api_key } from '../../Data'
import { converter } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'
const Playvideo = () => {
    const {videoId}=useParams();

   const[apidata,setapidata]=useState(null)
   const[channeldata,setchanneldata]=useState(null)
   const[commentdata,setcommentdata]=useState([])
   const fetchdata=async()=>{
    //fetched video data
     const videodetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${api_key}`
     await fetch(videodetails_url).then(responce=>responce.json()).then(data=>setapidata(data.items[0]));
   }
   
   const fetchchanneldata=async()=>{
    const channel_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${api_key}`
    await fetch(channel_url).then(res=>res.json()).then(data=>setchanneldata(data.items[0]))

    const commment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${api_key}`

    await fetch(commment_url).then(res=>res.json()).then(data=>setcommentdata(data.items))
   }
   useEffect(()=>{
    fetchdata();
   },[videoId])

   useEffect(()=>{
    fetchchanneldata()
   },[apidata])
  return (
    <div className='play-video'>
     
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apidata?apidata.snippet.title:"Title Here"}</h3>
      <div className='play-video-info'> 
        <p>{apidata?converter(apidata.statistics.viewCount):"view here "} views &bull;  {apidata?moment(apidata.snippet.publishedAt).fromNow():""}</p>
        <div> 
          <span ><img src={like}/>{apidata?converter(apidata.statistics.likeCount):122}</span>
          <span ><img src={dislike}/></span>
          <span ><img src={share}/>share</span> 
          <span ><img src={save}/>save</span>
        </div>
       </div> 
        <hr/>
        <div className='publisher'>
          <img src={channeldata?channeldata.snippet.thumbnails.default.url:""}/>
          <div>
            <p>{apidata?apidata.snippet.channelTitle:"kraryanTV"}</p>
            <span>{channeldata?converter(channeldata.statistics.subscriberCount):""}</span>
          </div>
          <button>Subscribe</button>
        </div>
   
        <div className='vid-desc'>
          <h3>Description</h3>
           <p>{apidata?apidata.snippet.description.slice(0,250):"description here"}</p>
           <p>subscribe for mor related video...more..</p>
           <hr/>
           <h4>{apidata?converter(apidata.statistics.commentCount) :"67"} Commnets</h4>
           {commentdata.map((item,index)=>{
             return(
               <div key={index} className='comments'>
               <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                 <div>
                <h3> {item.snippet.topLevelComment.snippet.authorDisplayName} <span>1day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className='comment-action' >
                  <img src={like}/>
                  <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={dislike} alt=""/>
                  <span></span>
                  <button>Reply</button> 
                </div>
            </div>
          </div> 
             )
           })}
             
        </div>
    </div>
  )
}

export default Playvideo
