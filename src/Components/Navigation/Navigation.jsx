import React from 'react';
import Logo from './logo.png';


function Navigation() {
    return (
       <nav className="h4 flex w-100 items-center justify-between pr5">
        <div>
        <img src={Logo} alt="logo" className='br-100 h3 w3 dib'/>
        </div>

       <div>
       <p className='f2 link dim white pointer '>Sign out</p>
       </div>
       </nav>
       
    )
}

export default Navigation
