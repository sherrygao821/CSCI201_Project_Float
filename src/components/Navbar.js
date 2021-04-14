import React, { useState } from 'react';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {Link} from 'react-router-dom';
import '../App.css';
import AddPost from '../pages/AddPost';

function DisplayIcon(props){

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

    const [show, setShow] = useState(false)
    if(props.itemPath === ""){
        return(
            
            <div id = "addButton" style={circleStyle} onClick={() => setShow(true)}> 
                {props.itemIcon}
                <AddPost show={show} />
            </div>
            
        );
    }
    else{                                
        return(
            <Link id = "links" to= {props.itemPath}>
                <div id = "circleButton" style={circleStyle}>      
                    {props.itemIcon}

                </div>
            </Link>
        );
    }
}

function Navbar() {


      
    return(

        <div className='nav-menu'>
            <div className='nav-menu-items'>
                
                {SidebarData.map((item, index) => {
                    return (
                        <div key = {index}> 
                            <DisplayIcon itemPath = {item.path} itemIcon = {item.icon} />
                        </div>
                    );
                })}


            </div>
        </div>

    );
}

export default Navbar;