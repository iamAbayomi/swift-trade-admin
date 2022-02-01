/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getToken } from '../classes/User';
import { useAppSelector } from '../redux/hooks';
import { selectAllCoins } from '../redux/reducers/CoinsSlice';

import './SingleCoinView.css'

const coin = ["bitcoin-coin", "ethereum-coin"]

type props = {
    coinTitle: any
}

const SingleCoinView: React.FC<props> = (props: any) =>{
    const coinImages = useAppSelector(selectAllCoins)

    return(
      <CardWhite>
        <Link to="/coins" className="link">
            <CardsRow>
                <div className="display-flex"> 
                    <CardTitle className="purple-header-typography">{props.coinTitle ? "Coins" : ""}</CardTitle>
                    {/* <TransactionOptions className="transaction-options" src="/vectors/options-menu.svg" /> */}
                </div>
                <ClearFix>
                    <div className="gift-card-section">
                        <GiftCards className="gift-cards">
                            {/* {coin.map((item)  =>
                                <GiftItem className="gift-cards-item" src={"/vectors/" + item + ".svg" }/>
                            )} */}

                            {
                                coinImages != null ? 
                                <div>
                                    {/* <GiftItem className="gift-cards-item" src={this.state.coinImages[0].image }/>
                                    <GiftItem className="gift-cards-item" src={this.state.coinImages[1].image }/> */}
                                    {coinImages.map((coin : any)  =>
                                        <Link to={'/addcoins?coin_id=' + coin.id
                                             + '&coin_name=' + coin.name
                                             + '&coin_image='  + coin.image
                                             + '&coin_rate=' + coin.rate
                                        }>
                                            <GiftItem className="gift-cards-item" src={coin.image }/>
                                        </Link>
                                    )}
                                    
                                     
                                </div>
                                
                                :<p> There is no cards currently </p> 

                            }
                        </GiftCards>
                        <Link to="/addcoins">
                                <Button className="blue-button">Add Coin</Button>    
                        </Link>
                        
                    </div>
                </ClearFix>
                
            </CardsRow>
        </Link>     
     </CardWhite>
    )   
}

export default  SingleCoinView 

const EditField = styled.input`
    // width: 268px;
    // height: 42px;
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
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
    transition: 0.3s;
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
