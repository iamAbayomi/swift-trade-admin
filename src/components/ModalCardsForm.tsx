import React from "react"
import UpdateBankAccount from "./ui-components/cards/UpdateBankAccount"

export default class ModalCardsForm {
    modal: React.RefObject<HTMLDivElement>

    constructor(){
        this.modal = React.createRef()

    }
    
    toogleModal(){
        this.modal.current?.classList.toggle('show-modal')
    }

    useThisModalHere(modal: string){
        console.log(modal)
    }

    render(){
        return(
            <div className="modal-container">
                <div className="modal show-modal" ref={this.modal}>
                    <div className="modal-content">
                        <span className="close-button" onClick={this.toogleModal.bind(this)}>x</span>
                        {/* <InformationCard 
                            response = {this.props.response}
                        /> */}
                        
                        {
                            
                            // <UpdateBankAccount />

                            // this.props.modalContent === "CompleteTransaction" ? <CompleteTransaction />
                            // : this.props.modalContent === "UploadPaymentDetails" ? <UploadPaymentDetails/>
                            // : <TransactionCompleted />
                        }
                        
                        {/* <UploadPaymentDetails /> */}
                        {/* <TransactionCompleted/> */}
                    </div>
                </div>
            </div>
        )
    }

}