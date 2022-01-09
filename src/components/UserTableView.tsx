/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import MUIDataTable from  "mui-datatables";
import styled from  'styled-components'
import Chips from './Chips';
import MenuOptions from './MenuOptions';
import UserImageandName from './UserImageandName';
import { getToken } from '../classes/User';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { muiTableOptionType } from '../classes/Utilities';


let history

function UserTableView (){
    const [userProfileRow, setUserProfileRow] = useState<string[][]>([])
    history = useHistory()

    const columns = ["Account Name", "User Name", "Email", "Action"]

    // const data: any =  []
    
    const data: any[][] = [
        // [<Chips chipsText="Active" backgroundColor="rgba(93, 248, 136, 1)" />,  <UserImageandName image="/vectors/profile-bman-image.svg" name="Ramon Ridwan"/>,"Ramonridwan@protonmail.com", <MenuOptions />],
        // [<Chips chipsText="Block" backgroundColor="rgba(255, 73, 73, 1)" />, <UserImageandName image="/vectors/profile-woman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions />],
        // [<Chips chipsText="Active" backgroundColor="rgba(93, 248, 136, 1)" />, <UserImageandName image="/vectors/profile-bman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions />],
        // [<Chips chipsText="Pending" backgroundColor="rgba(130, 130, 130, 1)" />, <UserImageandName image="/vectors/profile-wman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions />],
        // [<Chips chipsText="Block" backgroundColor="rgba(255, 73, 73, 1)"/>, <UserImageandName image="/vectors/profile-woman-image.svg" name="Ramon Ridwan"/>, "Ramonridwan@protonmail.com", <MenuOptions />]
    ]
    
    
    const options : muiTableOptionType = {
        elevation: 0,
        onRowClick: viewUser,
        responsive: "standard"
    }
    
    
    
    useEffect(()=>{
        getUsers()
    }, [])

    // Added method to get the list of users from API
    async function  getUsers() {
        
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/user/users/fetch?limit=20',{
            headers: {'Authorization' : `Bearer ${token}`}} )
        .then((res: any)=>{
                console.log('This is the data', res)
                setUsersData(res.data.data)
            })
            .catch((err) => {
                // console.log(err.response.data.message)
                console.log(err)
            })
    }

    function setUsersData (userData: any){
        //This sets the properites needed to display the user data from the API
        userData.map((item:any) => (
            // data.push(item.is_suspended, item.profile_picture, item.first_name + item.last_name, item.email )
            data.push([<Chips userId={item.id} chipsText={item.is_suspended.toString()} backgroundColor="rgba(93, 248, 136, 1)" />,  <UserImageandName image={item.profile_picture} name={item.first_name + " " + item.last_name} />, item.email, <MenuOptions />])
        ))

        setUserProfileRow(data)
    }

    

    function viewUser( rowData: any){
        console.log(rowData[0].props.userId)
        
        // window.location.href = "/users/singleuser/" + rowData[0].props.userId
        history.push("/users/singleuser/" + rowData[0].props.userId)
        // console.log('this is the props. ', this.props)
    }
    




    
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
                            data={userProfileRow}
                            columns={columns}
                            options = {options}
                            />
                        {/* <Button className="blue-button" >View More </Button> */}
                </div>
            </div>
        )
    
}

// function viewUser( rowData: any){
//     console.log(rowData[0].props.userId)
//     window.location.href = "/users/singleuser/" + rowData[0].props.userId
    
// }




const Button = styled.button `
    margin: 40px auto 10px auto;
`


export default UserTableView