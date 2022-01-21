import styled from "styled-components"
import './ThreeDotOptions.css'
type props = {
    dropdownText? : string[]
}

const ThreeDotOptions: React.FC<props> = (props) => {
    return(
        <div>
            <TransactionOptions className="transaction-options" src="/vectors/options-menu.svg" />
            <div className="options-dropdown">
                {
                    props.dropdownText!!.map((item) => {
                        <p>{item}</p>
                    })
                }
            </div>
        </div>
    )
}


export default ThreeDotOptions


const TransactionOptions = styled.img `
    margin: 20px 30px 20px 10px;

`

