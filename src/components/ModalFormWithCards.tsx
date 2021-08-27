import React from 'react'
import './ModalForm.css'


export default class ModalFormWithCards extends React.Component {
    modal: React.RefObject<HTMLDivElement>
    
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.modal = React.createRef()

    }
    
    toogleModal(){
        this.modal.current?.classList.toggle('show-modal')
    }

    render(){
        return(
            <div className="modal-container">
                <p> Hello what do you think </p>
                <div className="modal show-modal" ref={this.modal}>
                    <div className="modal-content">
                        <span className="close-button" onClick={this.toogleModal.bind(this)}>x</span>
                        <h1>Hello what are you doing?</h1>
                    </div>
                </div>
            </div>
        )
    }
}