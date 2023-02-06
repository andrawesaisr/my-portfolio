import React from 'react'
import Typed from 'react-typed'
import './header.css'
function Header() {
  return (
    <div class="main-info">
        <h1>who am i ?</h1>
        <Typed
                strings={[
                  '',
                    '',
                    'A software engineer',
                    'Also known as a',
                    'Front-end engineer',
                    'Back-end engineer',
                    'Full stack engineer',
                    'Or!',
                        'a coder',
                    '',
                    '',
                    '']}
                    typeSpeed={45}
                    backSpeed={50}
                    loop >
                   
                </Typed>
    </div>
  )
}

export default Header