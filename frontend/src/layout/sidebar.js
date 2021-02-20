import React from 'react';
import Icons from '../components/icons';
import Img from 'gatsby-image';

const Sidebar = ({ profileImage }) => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-image-container">
        <Img fixed={profileImage} className="sidebar-image"/>
        <span>Follow Me</span>
        <Icons/>
      </div>
    </div>
  )
}

export default Sidebar;