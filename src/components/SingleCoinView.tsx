/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getToken } from '../classes/User';

import './SingleCoinView.css'

const coin = ["bitcoin-coin", "ethereum-coin"]

type imageState = {
    coinImages: any
}

export default class SingleCoinView extends React.Component<imageState>{

    state : imageState = {
        coinImages: null
    }

    componentDidMount(){
        this.getCoins()
    }

    async getCoins(){
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/coins',{
            headers:{'Authorization' : `Bearer ${token}`}})
            .then((res: any) => {
                this.setState({coinImages: res.data.data})
                console.log('This is the response', res)
            })
            .catch((err)=>{console.log(err)})
        console.log('i am here')
    }

    async postCoins(){
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/coins/create',{
            headers:{'Authorization' : `Bearer ${token}`}})
            .then((res) => {console.log('This is the response', res)})
            .catch((err)=>{console.log(err)})
        console.log('i am here')
    }

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
                            {/* {coin.map((item)  =>
                                <GiftItem className="gift-cards-item" src={"/vectors/" + item + ".svg" }/>
                            )} */}

                            {
                                this.state.coinImages != null ? 
                                <div>
                                    <GiftItem className="gift-cards-item" src={this.state.coinImages[0].image }/>
                                    <GiftItem className="gift-cards-item" src={this.state.coinImages[1].image }/>
                                    {/* {this.state.coinImages.map((coin : any)  =>
                                        <GiftItem className="gift-cards-item" src={coin.image }/>
                                    )}
                                     */}
                                     
                                </div>
                                
                                :<p> There is no cards currently </p> 

                            }
                        </GiftCards>
                        <div className="add-coincard">
                            <p className="add-coin-title">Product</p>
                            <EditField className="input-field" placeholder="Bitcoin" />
                            <EditField className="input-field" placeholder="1-20"/>
                            <Button className="blue-button">Add Coin</Button>    
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
