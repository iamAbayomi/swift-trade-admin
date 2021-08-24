/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class SingleCardsView extends React.Component{

    render(){
    return(
      <CardWhite>
        <Link to="/trade/coin/sell" className="link">
            <CardsRow>
                <GiftCards className="">
                    <GiftItem className="gift-cards" src="/vectors/bitcoin.svg"/>
                    <GiftItem className="gift-cards" src="/vectors/ethereum.svg"/>
                    <GiftItem className="gift-cards" src="/vectors/skrill.svg"/>
                    <GiftItem className="gift-cards" src="/vectors/iTunes.svg"/>
                    <GiftItem className="gift-cards" src="/vectors/amazon.svg"/>
                </GiftCards>
            </CardsRow>
        </Link>     
     </CardWhite>
    )   
}
}

const CardWhite = styled.div `
    background-color: white;
    // padding: 20px 20px 10px 30px;
    border-radius: 10px;
    // width: 800px;
    height: 360px;
`

const CardsRow = styled.div`
    
`
const GiftCards = styled.div `
`

const GiftItem = styled.img`
    width:200px;
`

