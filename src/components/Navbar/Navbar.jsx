import React from 'react'
import'./Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
const Navbar = ({setsidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
          <img src={menu_icon} onClick={()=>setsidebar(prev=>prev===false?true:false)} alt='menu' className='menu-icon'></img>
          <Link to='/'><img src={logo} alt='logo' className='logo'></img></Link>
      </div>
     <div className='nav-middle flex-div'>
       <div className='search-box flex-div'>
         <input type='text' placeholder='search'/>
         <img src={search_icon} alt='search'></img>
       </div>
     </div>
      
      <div className='nav-right flex-div'>
        <img src={upload_icon} alt='upload'></img>
         <img src={more_icon} alt='more'></img>
          <img src={notification_icon} alt=''></img>
           <img src={profile_icon} alt='profile' className='user-icon'></img>
      </div>
    </nav>
  )
}

export default Navbar
