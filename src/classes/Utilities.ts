import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import moment from "moment"
import { fetchCard } from "../redux/reducers/CardsSlice"
import { fetchCoin } from "../redux/reducers/CoinsSlice"
import { fetchAllTransactions, fetchTransactionsCount } from "../redux/reducers/TransactionsSlice"
import { fetchAllUser, fetchCurrentUser } from "../redux/reducers/UsersSlice"
import customAxios from "./CustomAxios"
import { getToken } from "./User"

// Added baseUrl to axios
export const baseUrl = "https://swift-trade-v1.herokuapp.com/api/v1/"


export function formatAmount(amount :string | number) {

    if(!amount) {

        return `₦0`
    }


    return `₦${Number(amount).toLocaleString()}`
}

/** This function takes in the created data value from the API 
 *  and formats it into the DD-MM-YYYY format.
*/ 
export function formatDate(unformattedData : any){
    // let date = new Date(unformattedData)
    let formattedDate = moment(unformattedData).format('DD-MM-YYYY')
    //console.log(formattedDate)
    return formattedDate
}
// This get the user profile from the API and returns the data
export function getUserProfile(token: string, userId: string): any{
    return axios.get(`https://swift-trade-v1.herokuapp.com/api/v1/user/${userId}/info`,
        {headers: {'Authorization' : `Bearer ${token}`}} )
    .then((res: any)=> res.data.data)
}
//export Data Type for Material Table 
export type muiTableOptionType = {
    elevation: number,
    rowsPerPage?: number,
    onRowClick? : (rowData : any) => void
    responsive: Responsive
}
// Respsonsive type for 
export type Responsive = 'vertical' | 'standard' | 'simple';
// Method to use Custom Axios module 
export const useCustomAxios = async (method: any, path: any, data?: any, tempData?: any) => {
    const token = await getToken()
    const {response, error} = await customAxios({
        method, url: baseUrl + path ,
        headers: {'Authorization': `Bearer ${token}`},
        data
    })
    return {response, error}
}
// export const useCreateAsyncThunkWithAPI = (actionName: any, method: any, path: any, body?: any ) =>{
//     createAsyncThunk(actionName, async(body) => {
//         const {response, error} = await useCustomAxios(method, path, body)
//         return response ? response.data.data : error
//     })
// }
// Fetch all the App data from the redux store
export const getAllAppData = async(store: any) => {
    store.dispatch(fetchCurrentUser())
    store.dispatch(fetchAllUser())
    store.dispatch(fetchAllTransactions())
    store.dispatch(fetchTransactionsCount())
    store.dispatch(fetchCard())
    store.dispatch(fetchCoin())
}


