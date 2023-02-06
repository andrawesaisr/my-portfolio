import React from 'react'
import DevIcon from "devicon-react-svg";
import { techs } from '../../helpers/techs';
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
                        <div key={idx} className='tech-card'>
                            <DevIcon  className='tech-icon' icon={e.iconName} />
                        <span style={{margin:'5px', fontSize:'1.5rem'}}>{e.name}</span>
                        </div> 
                    )
                })
            }
       
        </div>
    </div>
  )
}

export default Technologies