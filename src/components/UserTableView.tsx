/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import MUIDataTable from  "mui-datatables";
import styled from  'styled-components'
import Chips from './Chips';
import MenuOptions from './MenuOptions/MenuOptions';
import UserImageandName from './UserImageandName';
import { getToken } from '../classes/User';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { muiTableOptionType } from '../classes/Utilities';
import { useSelector } from 'react-redux';
import { fetchAllUser, selectAllUsers } from '../redux/reducers/UsersSlice';


let history

type props = {
    showUserTitle: boolean
}

const UserTableView: React.FC<props> = (props) => {
    const history = useHistory()

    const columns = ["Account Name", "User Name", "Email", "Action"]
    const allUsers : any = useSelector<any[]>(selectAllUsers)
    
    const options : muiTableOptionType = {
        elevation: 0,
        onRowClick: viewUser,
        responsive: "standard"
    }
    
    console.log('all users', allUsers)
    
    //This sets the properites needed to display the user data from the API
    const dataTables = allUsers.map((item:any) => (
            [<Chips userId={item.id} chipsText={item.is_suspended.toString()} backgroundColor="rgba(93, 248, 136, 1)" />,  
                <UserImageandName image={item.profile_picture} name={item.first_name + " " + item.last_name} />, item.email, <MenuOptions />]
        ))

    
    function viewUser( rowData: any){
        console.log(rowData[0].props.userId)
        history.push("/users/singleuser/" + rowData[0].props.userId)
    }
    

        return(
            <div className="margin-top">
                <div className="transaction-board card-white margin-top">
                        <p className="transaction-text">{ props.showUserTitle ? "Users" : "" }</p>
                        <MUIDataTable 
                            title={""}             
                            data={dataTables}
                            columns={columns}
                            options = {options}
                            />
                </div>
            </div>
        )
    
}




const Button = styled.button `
    margin: 40px auto 10px auto;
`


export default UserTableView