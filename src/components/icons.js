import React from 'react';
import { Link } from 'gatsby';

import Github from '../assets/github.svg'
import Medium from '../assets/medium.svg'
import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import Gmail from '../assets/gmail.svg'

import '../scss/main.scss'

export default function Icons(width) {
    return (
        <div className="social">
            <Link to="https://github.com/ErozionZeal"><Github  className="icon2" styles={{maxWidth: `${width}`}}/></Link>
            <Link  to="https://medium.com/@SaruulbuyanMunkhtur"><Medium className="icon2" styles={{maxWidth: `${width}`}}/></Link>
            <Link  to="https://www.linkedin.com/in/saruulbuyan-munkhtur-a82257185/"><LinkedIn className="icon2" styles={{maxWidth: `${width}`}}/></Link>
            <Link  to="https://www.instagram.com/?hl=en"><Instagram className="icon2" styles={{maxWidth: `${width}`}}/></Link>
            <Link  to="https://www.Twitter.com"><Twitter className="icon2" styles={{maxWidth: `${width}`}}/></Link>
            <Link  to="@cedricmunkhtur2020@gmail.com"><Gmail className="icon2" styles={{maxWidth: `${width}`}}/></Link>
        </div>
    )
}
