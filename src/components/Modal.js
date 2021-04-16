import React from 'react'
import './modal.css'
import Addpost from './Addpost';

const Modal = props => {
    if (!props.show){
        return null
    }
    return(
        <div className = "modal">
            <div className = "modal-content" onClick = {e => e.stopPropagation()}>
                <div className = "modal-header">
                    <button onClick={props.onClose} className = "button">Close</button>
                    <h4>{props.title}</h4>
                    <div>
                        {props.publish
                            ? <button className = "button">Publish</button>
                            : null
                        }
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
                <div className = "modal-footer">
                   
                </div>
            </div>
        </div>
    )
}

export default Modal;