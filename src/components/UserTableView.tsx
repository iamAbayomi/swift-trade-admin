/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import MUIDataTable from  "mui-datatables";
import styled from  'styled-components'
import Chips from './Chips';
import MenuOptions from './MenuOptions';
import UserImageandName from './UserImageandName';
import { getToken } from '../classes/User';
import axios from 'axios';

type typeState = {
    userProfile: any,
    token: '',
    data : '',
    userProfileRow: any
}

export default class UserTableView extends React.Component<typeState>{

    state: typeState = {
        userProfile : [],
        token: '',
        data: '',
        userProfileRow: ''
    }    

    componentDidMount(){ 
        this.getUsers()
        console.log(this.checkStatus("true".toLowerCase()))
    }

    // Added method to get the list of users from API
    async getUsers() {
        let token = await getToken()
        axios.get('https://swift-trade-v1.herokuapp.com/api/v1/user/users/fetch?limit=20',{
            headers: {'Authorization' : `Bearer ${token}`}} )
        .then((res: any)=>{
                console.log('This is the data', res)
                this.setUsersDate(res.data.data)
            })
            .catch((err) => {
                // console.log(err.response.data.message)
                console.log(err)
            })
    }

    setUsersDate (userData: any){
        //This sets the properites needed to display the user data from the API
        userData.map((item:any) => (
            // data.push(item.is_suspended, item.profile_picture, item.first_name + item.last_name, item.email )
            data.push([<Chips chipsText={item.is_suspended} backgroundColor="rgba(93, 248, 136, 1)" />,  <UserImageandName image={item.profile_picture} name={item.first_name + item.last_name} />, item.email, <MenuOptions />])
        ))

        this.setState({ userProfileRow: data})
    }

    checkStatus(status: any){
        if(status){
            switch(status){
                case "false":
                    status = "Active"
                    break;
                case "true":
                    status = "Inactive"
                    break;            
            }
        }
        return status
    }

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

// const data: any =  []

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