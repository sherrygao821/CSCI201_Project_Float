import React from 'react'
import './modal.css'
import Addpost from './Addpost';

const Modal = props => {

    return(
        <div className = {`modal ${props.show ? 'show' : ''}`} onClick = {props.onClose}>
            <div className = "modal-content" onClick = {e => e.stopPropagation()}>
                <div className = "modal-header">
                    <div id="closeButtonDiv">
                        <button id="close" onClick={props.onClose} className = "button" style={{border: 'none', padding: 10,borderRadius: 20, marginTop: 10, marginLeft: 10}}>Close</button>
                    </div>
                    <div id="titleDiv">
                        <h4 id="title" style={{marginTop: 14}}>{props.title}</h4>
                    </div>
                    <div id="emptyDiv">
                    </div>
                </div>
                <div className = "modal-body">
                    <div>                        
                        {props.publish
                            ? <Addpost />
                            : null
                        }
                    </div>
                </div>
                {/* <div className = "modal-footer">
                   
                </div> */}
            </div>
        </div>
    )
}

export default Modal;