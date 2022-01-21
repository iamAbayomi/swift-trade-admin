/* eslint-disable jsx-a11y/alt-text */
import { Dropdown } from "react-bootstrap"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { fetchAllTransactions, updateTransactionStatus } from "../../redux/reducers/TransactionsSlice"
import './MenuOptions.css'

type props = {
    optionsContent: string [],
    optionsMethod: (transaction_id: any,item :any) => void,
    transactionId: string
}

// {"status": "successful"}

const ThreeDotOptions: React.FC<props> = (props) => {
    const dispatch = useDispatch()
    const params = { transactionId: props.transactionId, data: {"status": "successful"} } 
    
    // props.optionsContent.map((item: any) => {
    //     console.log("props. array, ", item )
    // })

    async function changeTransactionStatus(item: any){
        if(item == "Decline"){
            params.data.status = "cancelled"
        }
        await dispatch(updateTransactionStatus( params ))
        await dispatch(fetchAllTransactions())
        console.log("I am here")
    }
    
    
    return(
        <div>
            <Dropdown className="center">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        <TransactionOptions src="/vectors/options-menu.svg" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            props.optionsContent.map((item: any) => 
                               <Dropdown.Item href="" onClick={() => props.optionsMethod(props.transactionId, item)}>{item}</Dropdown.Item>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}

export default ThreeDotOptions


const TransactionOptions = styled.img `
    
`