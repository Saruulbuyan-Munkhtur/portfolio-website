import React from 'react'
import Icons from './icons'
import Avatar from './avatar'

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <Avatar url="http://localhost:8000/static/30db1376cf4121e8abf5d10b7e989c13/8e1fc/sunset2.jpg" title="first" alt="second" />
      <Icons/>
    </div>
  )
}

export default Sidebar;