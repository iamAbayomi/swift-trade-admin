/* eslint-disable jsx-a11y/alt-text */
import { Dropdown } from "react-bootstrap"
import styled from "styled-components"
import './ThreeDotOptions.css'

function ThreeDotOptions(){
    
    function selectOptions(string: any){

    }
    
    return(
        <div>
            <Dropdown className="center">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        <TransactionOptions src="/vectors/options-menu.svg" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="" onClick={()=> selectOptions('Wallet')}>Approve</Dropdown.Item>
                        <Dropdown.Item href="" onClick={()=> selectOptions('Bank Transfer')}>Decline</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}

export default ThreeDotOptions


const TransactionOptions = styled.img `
    
`