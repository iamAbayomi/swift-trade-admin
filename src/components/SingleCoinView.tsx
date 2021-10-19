/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import './SingleCoinView.css'

const coin = ["bitcoin-coin", "ethereum-coin"]

export default class SingleCardsView extends React.Component{

    render(){
    return(
      <CardWhite>
        <Link to="/coins" className="link">
            <CardsRow>
                <div className="display-flex"> 
                    <CardTitle className="purple-header-typography">Coins</CardTitle>
                    <TransactionOptions className="transaction-options" src="/vectors/options-menu.svg" />
                </div>
                <ClearFix>
                    <div className="gift-card-section">
                        <GiftCards className="gift-cards">
                            {coin.map((item)  =>
                                <GiftItem className="gift-cards-item" src={"/vectors/" + item + ".svg" }/>
                            )}
                        </GiftCards>
                        <div className="add-coincard">
                            <p className="add-coin-title">Product</p>
                            <EditField className="input-field" placeholder="Bitcoin" />
                            <EditField className="input-field" placeholder="1-20"/>
                            <Button className="blue-button">View More</Button>    
                        </div>
                    </div>
                </ClearFix>
                
            </CardsRow>
        </Link>     
     </CardWhite>
    )   
}
}


const EditField = styled.input`
    // width: 268px;
    // height: 42px;
    margin: 10px 0px 0px 0px;
    display: block;
    border-radius: 100px;
`

const CardTitle = styled.p `
    margin: 45px 0px 0px 0px;
`

const CardWhite = styled.div `
    background-color: white;
    padding: 20px 20px 10px 30px;
    border-radius: 10px;
    // width: 800px;
    // height: 444px;
`

const ClearFix = styled.div `
    clear:both;
`

const AddGreenButton = styled.img `
    margin: 10px 0px 30px 20px;
`

const CardsRow = styled.div`
`
const GiftCards = styled.div `
`

const GiftItem = styled.img`
    // width: 150px;
    
`

const Button = styled.button `
    width: 110px;
    height: 42px;
    margin: 29px auto 30px auto;
    border-radius: 100px;
    background-color: #010066;
`

const TransactionOptions = styled.img `
    margin: 10px 0px 20px 10px;

`
