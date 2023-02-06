import React from 'react'
import andrew from '../../images/andrew.jpg'
import './aboutMe.css'
function AboutMe() {
  return (
    <div className='about-container' id="about-me">
      <div>
      <img src={andrew} alt="me" />
      </div>
      <div className='about-text'>
        <h1>ABOUT ME</h1>
        <p>As a computer science student with a passion for problem solving, I am always eager to take on new challenges and learn the latest technologies. My expertise lies in developing dynamic web applications using React.js and Node.js. I am a proactive individual who is constantly seeking out new opportunities to improve my skills and knowledge in the field of computer science. I have already worked on several projects, honing my abilities in front-end and back-end development, and I am always looking for more opportunities to apply my skills to real-world problems. I am confident that my drive, passion, and technical proficiency will enable me to make a meaningful contribution to any organization I work with.</p>
      </div>
      </div>
  )
}

export default AboutMe