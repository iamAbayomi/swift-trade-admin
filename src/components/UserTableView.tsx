/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import MUIDataTable from  "mui-datatables";
import styled from  'styled-components'
import Chips from './Chips';
import MenuOptions from './MenuOptions';
import UserImageandName from './UserImageandName';

export default class UserTableView extends React.Component{
    render(){
        return(
            <div className="margin-top">
                <div className="transaction-board card-white margin-top">
                        <p className="transaction-text">Users</p>
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


const columns = ["Account Name", "User Name", "Email", "Action"]

const data = [
    [<Chips chipsText="Active" backgroundColor="rgba(93, 248, 136, 1)" />,  <UserImageandName image="/vectors/profile-bman-image.svg" name="Ramon Ridwan"/>,"Ramonridwan@protonmail.com", <MenuOptions />],
    [<Chips chipsText="Block" backgroundColor="rgba(255, 73, 73, 1)" />, <UserImageandName image="/vectors/profile-woman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions />],
    [<Chips chipsText="Active" backgroundColor="rgba(93, 248, 136, 1)" />, <UserImageandName image="/vectors/profile-bman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions />],
    [<Chips chipsText="Pending" backgroundColor="rgba(130, 130, 130, 1)" />, <UserImageandName image="/vectors/profile-wman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions />],
    [<Chips chipsText="Block" backgroundColor="rgba(255, 73, 73, 1)"/>, <UserImageandName image="/vectors/profile-woman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions />]
]

const options = {
    elevation: 0
}


const Button = styled.button `
    margin: 40px auto 10px auto;
`