import React from 'react'
import DevIcon from "devicon-react-svg";
import { techs } from '../../helpers/techs';
import { Fade } from "react-awesome-reveal";
import './technologies.css'

function Technologies() {
  return (
    <div className='technologies-container' id='technologies' >
        <div>
            <h1 style={{
                textAlign:'center'
            }}>Some of the technologies that i use</h1>
        </div>
    
        <div className='tech-card-container'>
            {
                techs.map((e,idx)=>{
                    return (
                        <Fade direction='right' duration={1500} triggerOnce="true">
                        <div key={idx} className='tech-card'>
                            <DevIcon  className='tech-icon' icon={e.iconName} />
                        <span style={{margin:'5px', fontSize:'1.5rem'}}>{e.name}</span>
                        </div> 
                        </Fade>
                    )
                })
            }
       
        </div>
        
    </div>
  )
}

export default Technologies