/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

export default class CollectionofCards extends React.Component{

    render(){
        return(
            <div className="card-white clearfix">
                <div className="gift-cards-row">
                    <img className="gift-cards" src="/vectors/bitcoin.svg"></img>
                    <img className="gift-cards" src="/vectors/ethereum.svg"></img>
                    <img className="gift-cards" src="/vectors/skrill.svg"></img>
                    <img className="gift-cards" src="/vectors/iTunes.svg"></img>
                    <img className="gift-cards" src="/vectors/amazon.svg"></img>
                    <img className="gift-cards" src="/vectors/steam.svg"></img>
                </div>
                <CardButton className="blue-button float-button" >
                <p>Trade Now</p>
                </CardButton>
            </div>
        )
    }

}


const CardButton =  styled.button `
    margin: 40px 0px 0px 5px;
`