import React from 'react'
import './modal.css'
import Addpost from './Addpost';

const Modal = props => {

    return(
        <div className = {`modal ${props.show ? 'show' : ''}`} onClick = {props.onClose}>
            <div className = "modal-content" onClick = {e => e.stopPropagation()}>
                <div className = "modal-header">
                    <button id="close" onClick={props.onClose} className = "button">Close</button>
                    <h4 id="title">{props.title}</h4>
                    {/* <div>
                        {props.publish
                            ? <button className = "button">Publish</button>
                            : null
                        }
                    </div> */}
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