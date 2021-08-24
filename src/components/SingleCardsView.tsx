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
                <p className="purple-header-typography">Cards</p>
                <GiftCards className="">
                    <GiftItem className="gift-cards" src="/vectors/bitcoin.svg"/>
                    <GiftItem className="gift-cards" src="/vectors/ethereum.svg"/>
                    <GiftItem className="gift-cards" src="/vectors/skrill.svg"/>
                    <GiftItem className="gift-cards" src="/vectors/iTunes.svg"/>
                    <GiftItem className="gift-cards" src="/vectors/amazon.svg"/>
                    <AddGreenButton src="/vectors/add-green-button.svg" />
                </GiftCards>
                <Button className="blue-button">View More</Button>
            </CardsRow>
        </Link>     
     </CardWhite>
    )   
}
}

const CardWhite = styled.div `
    background-color: white;
    padding: 20px 20px 10px 30px;
    border-radius: 10px;
    // width: 800px;
    height: 360px;
`

// const CardText = styled.div `
//     parag
// `

const AddGreenButton = styled.img `
    margin: 10px 0px 30px 20px;
`

const CardsRow = styled.div`
    
`
const GiftCards = styled.div `
`

const GiftItem = styled.img`
    width: 150px;
`

const Button = styled.button `
    margin: 130px auto 30px auto;
`

