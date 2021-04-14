import React from 'react';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {Link} from 'react-router-dom';
import '../App.css';

function Navbar() {

    var circleStyle = {
        padding:20,
        margin:20,
        display:"inline-block",
        borderRadius: "50%",
        width:100,
        height:100,
        left:0,
        top:0
      };
    return(

        <div className='nav-menu'>
            <div className='nav-menu-items'>
                {SidebarData.map((item, index) => {
                    return (
                        <div key = {index} className = {item.cName}>                                    
                            <Link id = "links" to={item.path}>
                                <div id = "circleButton" style={circleStyle}>      
                                    {item.icon}
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}

export default Navbar;