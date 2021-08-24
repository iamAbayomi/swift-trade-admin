/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../pages/Overview.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'

type MyProps = {
    transactiontext : string,
    percentage : number
}

export default class SingleTransactionCardView extends React.Component<MyProps> {

    
    render(){
        return(
            <div>
                <div className="single-transaction-card card-white">
                        <img className="transaction-options" src="/vectors/options-menu.svg" />
                        <TransactionGroup className="">
                           <CircularProgressGroup>
                                <div style={{ width:100, height:100}}>
                                    <CircularProgressbar value={this.props.percentage} 
                                    text={`${this.props.percentage}%`} 
                                    styles={buildStyles({pathColor : '#010066', textColor: '#010066' } )}/>
                                </div>
                                <TopProgessSvg src="/vectors/top-progress-design.svg" />
                                <BottomProgessSvg src="/vectors/bottom-progress-design.svg" />
                            </CircularProgressGroup> 
                            <p className="transaction-text">{this.props.transactiontext}</p>
                        </TransactionGroup>
                    </div>
            </div>
        )
    }

}


const TransactionGroup = styled.div `
    display:flex;   
    clear:both;
`


const TopProgessSvg = styled.img `
    position: absolute;
    left: 50px;
    top: -10px;
    display: none;
`

const BottomProgessSvg = styled.img `
    display: none;
`

const CircularProgressGroup = styled.div `

`