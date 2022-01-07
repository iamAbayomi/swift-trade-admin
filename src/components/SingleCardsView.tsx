/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getToken } from '../classes/User';
const giftImages = ["amazon-card", "itunes-card", "google-playcard","itunes-card", "other-cards"];



// const giftImages = ["amazon-card", "itunes-card", "google-playcard","itunes-card", "other-cards",
//  "itunes-card", "google-playcard","itunes-card", "other-cards", "itunes-card", "google-playcard","itunes-card", "other-cards"
//  , "itunes-card", "google-playcard","itunes-card", "other-cards"];

type imagesState = {
    cardImages: any
}

export default class SingleCardsView extends React.Component<imagesState>{

    state : imagesState = {
        cardImages : null
    }

    componentDidMount(){
        this.getCards()
    }
    

    // Get all the cards from the api cards
    async getCards(){
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/cards', {
             headers: {'Authorization' : `Bearer ${token}`
            }}).then((res: any) => {
                this.setState( { cardImages: res.data.data})
                console.log('this is the response of the cards', res)
                // this.forceUpdate()
            })
            .catch((err)=>{
                console.log(err)
            })
        console.log('i am here')
    }
    

    render(){
    return(
      <CardWhite>
        <Link to="/cards" className="link">
            <CardsRow>
                <div className="display-flex"> 
                    <CardTitle className="purple-header-typography">Cards</CardTitle>
                    <TransactionOptions className="transaction-options" src="/vectors/options-menu.svg" />
                </div>
                <ClearFix>
                    <GiftCards className="">
                    {
                        this.state.cardImages !=null ?  
                       <div>
                           {
                            this.state.cardImages.map((card : any) => (
                                <Link to={'/addcards?card_id=' +  card.id 
                                    + '&card_name=' + card.name
                                    + '&card_image=' + card.image
                                    + '&card_rate=' + card.rate
                                    } 
                                    className='link' >
                                    <img className='card-image' src={card.image} /> 
                                </Link>      
                            ))
                            }
                        </div>
                        : <p>There are no cards currently </p>     
                    }
                        <Link to="/addcards" className="link">
                            <AddGreenButton src="/vectors/add-green-button.svg" />
                        </Link>
                    </GiftCards>
                    <Button className="blue-button">View More</Button>
                </ClearFix>
            </CardsRow>
        </Link>     
     </CardWhite>
    )   
    }
}

const CardWhite = styled.div `
    background-color: white;
    padding: 45px 55px 31px 0px;
    border-radius: 10px;
    // width: 800px;
    // height: 381px;
    box-sizing: border-box;
`

// const CardText = styled.div `
//     parag
// `

const AddGreenButton = styled.img `
    margin: 10px 0px 30px 40px;
`

const CardsRow = styled.div`
    margin: 0px 12px 0px 52px;
`
const GiftCards = styled.div `
    margin: 60px 0px 0px 0px;
`

const GiftItem = styled.img`
    width: 150px;
`

const Button = styled.button `
    margin: 53px auto 31px auto;
    border-radius: 100px;
`



const CardTitle = styled.p `
    margin: 0px 0px 0px 0px;
`



const TransactionOptions = styled.img `
    margin: 10px 0px 20px 10px;

`


const ClearFix = styled.div `
    clear:both;
`

