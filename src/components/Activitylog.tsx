import React from 'react'
import styled from 'styled-components'
import './BankAccount.css'


export default class ActivityLog extends React.Component{

    render(){
        return(
            <div className="full-page-view">
                <CardWhite className="card-white">
                    <div>
                        <ActivityHeader>You logged In</ActivityHeader>   
                        <ActivitySubtitle>25TH JULY, 2021 3 MINUTES AGO</ActivitySubtitle>    
                        <div className="divider" />
                    </div>
                    <div>
                        <ActivityHeader>You sold coins to Swift Trade</ActivityHeader>   
                        <ActivitySubtitle>25TH JULY, 2021 11:59AM</ActivitySubtitle>    
                        <div className="divider" />
                    </div>
                    <div>
                        <ActivityHeader>2 cards were purchased from you</ActivityHeader>   
                        <ActivitySubtitle>25TH JULY, 2021 11:59AM</ActivitySubtitle>    
                        <div className="divider" />
                    </div>

                </CardWhite>
            </div>
        )
    }

}


const ActivityHeader = styled.p `
    font-size: 15px;
    margin: 20px 0px 3px 0px;
    color: rgba(41, 38, 38, 0.918);
    
`
const ActivitySubtitle = styled.p`
    font-size: 10px;
    margin: 0px 0px 10px 0px;
    color: rgba(189, 189, 189, 0.877);
`

const CardWhite = styled.div `
    height: 365px;
`

