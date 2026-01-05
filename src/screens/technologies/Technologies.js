import DevIcon from "devicon-react-svg";
import { techs } from '../../helpers/techs';
import { Fade } from "react-awesome-reveal";
import MagneticButton from "../../components/MagneticButton";
import './technologies.css'

function Technologies() {
  return (
    <div className='technologies-container' id='technologies' >
        <div className='tech-header'>
            <h1 className='tech-title'>Technologies & Tools</h1>
            <p className='tech-subtitle'>A comprehensive toolkit I leverage to build modern, scalable applications</p>
        </div>

        <div className='tech-card-container'>
            {
                techs.map((e,idx)=>{
                    return (
                        <Fade
                            key={idx}
                            direction='up'
                            duration={1000}
                            delay={idx * 50}
                            triggerOnce={true}
                        >
                            <MagneticButton strength={0.15} radius={120}>
                                <div className='tech-card'>
                                    <div className='tech-card-inner'>
                                        <div className='tech-icon-wrapper'>
                                            <DevIcon className='tech-icon' icon={e.iconName} />
                                        </div>
                                        <span className='tech-name'>{e.name}</span>
                                    </div>
                                </div>
                            </MagneticButton>
                        </Fade>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Technologies