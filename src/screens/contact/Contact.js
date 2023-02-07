import React from 'react'
import './contact.css'
 import {navigationLinks} from '../../helpers/navigationLinks'
 import { SocialIcon } from 'react-social-icons';
function createLinks() {
    return navigationLinks.map((e, idx) => (
      <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
  }
  
  function Contact() {
    return (
      <div className="contactMe__container" id="contact">
        <div className="contactMe__data__links">
          <div>
            <p>Egypt, Cairo</p>
            <p>Andrew Aisr Adolf</p>
            <p>andrawesaisr@gmail.com</p>
            <div className='social_icons'>
            <SocialIcon url="https://www.linkedin.com/in/andrew-aisr-49696220b/" target="_blank" />
            <SocialIcon url="https://github.com/Andrawesaisr?tab=repositories"  bgColor="white" target="_blank"/>
            <SocialIcon url="https://leetcode.com/andrewAisr/"  bgColor="white" target="_blank" />
            </div>
          </div>
          <div>
            {createLinks()}
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact