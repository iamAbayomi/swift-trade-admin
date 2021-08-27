import React from 'react'
import './ModalForm.css'


export default class ModalFormWithCards extends React.Component {
    
    render(){
        return(
            <div className="modal-container">
                <p> Hello what do you think </p>
                <div className="modal show-modal">
                    <div className="modal-content">
                        <span className="close-button">x</span>
                        <h1>Hello what are you doing?</h1>
                    </div>
                </div>
            </div>
        )
    }
}