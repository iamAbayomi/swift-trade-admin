/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const giftImages = ["amazon-card", "itunes-card", "google-playcard","itunes-card", "other-cards"];

export default class SingleCardsView extends React.Component{

    

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
                        {giftImages.map((item) =>
                            <img className="card-image" src={"/vectors/" + item + ".svg"}/>    
                        )}
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
    height: 381px;
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

