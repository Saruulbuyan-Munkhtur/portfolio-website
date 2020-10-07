import React from 'react';

import Github from '../assets/github.svg'
import Medium from '../assets/medium.svg'
import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'
import Gmail from '../assets/gmail.svg'

import '../scss/main.scss'

export default function Icons(width) {
    return (
        <div className="icons">
            <a href="https://github.com/ErozionZeal" target="_blank"><Github  className="icon2" styles={{maxWidth: `${width}`}}/></a>
            <a  href="https://medium.com/@SaruulbuyanMunkhtur" target="_blank"><Medium className="icon2" styles={{maxWidth: `${width}`}}/></a>
            <a  href="https://www.linkedin.com/in/saruulbuyan-munkhtur-a82257185/" target="_blank"><LinkedIn className="icon2" styles={{maxWidth: `${width}`}}/></a>
            <a  href="https://www.instagram.com/saruulbuyanmunkhtur/?hl=en" target="_blank"><Instagram className="icon2" styles={{maxWidth: `${width}`}}/></a>
            <a  href="https://www.Twitter.com" target="_blank"><Twitter className="icon2" styles={{maxWidth: `${width}`}}/></a>
            <a  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWQDDsSjfTZkvHjNbjGMJcCKlVdCJmlFFqqBQmCvxkghFklLmbwFwgXBllKGNbHVSGMbq" target="_blank"><Gmail className="icon2" styles={{maxWidth: `${width}`}}/></a>
        </div>
    )
}
