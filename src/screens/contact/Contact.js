import React from 'react'
import './contact.css'
 import {navigationLinks} from '../../helpers/navigationLinks'
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
            <p>Andrawesaisr@gmail.com</p>
          </div>
          <div>
            {createLinks()}
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact