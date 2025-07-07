import React from 'react'
import './Sidebar.css'
import game_icon from '../../assets/game_icon.png'
import blogs from '../../assets/blogs.png'
import home from '../../assets/home.png'
import automobile from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
const Sidebar = ({sidebar,category,setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className='short-links'>
           <div className={`side-links ${category===0?"active":""}`} onClick={()=>setcategory(0)} >
            <img src={home} /><p>Home</p>
            </div>  
            <div className={`side-links ${category===20?"active":""}`} onClick={()=>setcategory(20)}>
            <img src={game_icon} /><p>Game icon</p>
            </div>
           <div className={`side-links ${category===2?"active":""}`} onClick={()=>setcategory(2)}>
            <img src={automobile} /><p>Automobile</p>
           </div> 
           <div className={`side-links ${category===17?"active":""}`} onClick={()=>setcategory(17)}>
            <img src={sports} /><p>Sports</p>
           </div>
            <div className={`side-links ${category===24?"active":""}`} onClick={()=>setcategory(24)}>
            <img src={entertainment}/><p>Entertain</p>
           </div>  
            <div className={`side-links ${category===28?"active":""}`} onClick={()=>setcategory(28)}>
            <img src={tech} /><p>Technology</p>
           </div>
            <div className={`side-links ${category===10?"active":""}`} onClick={()=>setcategory(10)}>
            <img src={music} /><p>Music</p>
           </div>
            <div className={`side-links ${category===22?"active":""}`} onClick={()=>setcategory(22)}>
            <img src={blogs} /><p>Blogs</p>
           </div>
            <div className={`side-links ${category===25?"active":""}`} onClick={()=>setcategory(25)}>
            <img src={news}/><p>News</p>
           </div>
        </div>
        <hr/>
        <div className='subscribe-list'>
          <h3>Subcribed</h3>
            <div className='side-links'>
            <img src={jack}/><p>PewDiepie</p>
           </div>
            <div className='side-links'>
            <img src={simon}/><p>Mrbeast</p>
           </div>
            <div className='side-links'>
            <img src={tom}/><p>BB ki Vines</p>
           </div>
           <div className='side-links'>
            <img src={megan}/><p>Eduniti</p>
           </div>
            <div className='side-links'>
            <img src={cameron}/><p>PW</p>
           </div>
        </div>
    </div>
  )
}

export default Sidebar
