/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import MUIDataTable from  "mui-datatables";
import styled from  'styled-components'
import MenuOptions from './MenuOptions';
import UserImageandName from './UserImageandName';
import Chips from './Chips';

export default class PaymentsTransactionCard extends React.Component{
    render(){
        return(
            <div className="margin-top">
                <div className="transaction-board card-white margin-top">
                        <p className="transaction-text">Payments</p>
                        {/* <div className="transaction-head-table transaction-ids display-flex">
                            <p>Date</p>
                            <p>Transaction ID</p>
                            <p>Type</p>
                            <p>Value</p>
                            <p>Status</p>
                        </div> */}      
                        <MUIDataTable 
                            title={""}             
                            data={data}
                            columns={columns}
                            options = {options}
                            />
                        <Button className="blue-button" >View More </Button>
                </div>
            </div>
        )
    }
}


const columns = ["Payment Status", "User", "Email", "Action"]

const data = [
    [<Chips chipsText="Processing" backgroundColor="#010066" />,  <UserImageandName image="/vectors/profile-ywoman-image.svg" name="Quadiri Lawal"/>, "Quaderilawal@protonmail.com", <MenuOptions/>],
    [<Chips chipsText="Decline" backgroundColor="rgba(255, 73, 73, 1)" />,  <UserImageandName image="/vectors/profile-bman-image.svg" name="Tusweet iyanah"/>, "Tusweetiyanah@protonmail.com", <MenuOptions/>],
    [<Chips chipsText="Pending" backgroundColor="rgba(130, 130, 130, 1)" />,  <UserImageandName image="/vectors/profile-wman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions/>],
    [<Chips chipsText="Decline" backgroundColor="rgba(255, 73, 73, 1)" />,  <UserImageandName image="/vectors/profile-swman-image.svg" name="Lai Muhammed"/>, "Laimuhammed@protonmail.com", <MenuOptions/>]
    
]



const Button = styled.button `
    margin: 40px auto 10px auto;
`

const options = {
    elevation: 0
}
