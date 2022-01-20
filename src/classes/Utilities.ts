import axios from "axios"
import moment from "moment"
import { getAllTransactionsFromAPI } from "../redux/reducers/TransactionsSlice"
import { fetchUsers } from "../redux/reducers/UsersSlice"
import customAxios from "./CustomAxios"
import { getToken } from "./User"

// Added baseUrl to axios
export const baseUrl = "https://swift-trade-v1.herokuapp.com/api/v1/"

/** This function takes in the created data value from the API 
 *  and formats it into the DD-MM-YYYY format.
*/ 
export function formatDate(unformattedData : any){
    // let date = new Date(unformattedData)
    let formattedDate = moment(unformattedData).format('DD-MM-YYYY')
    console.log(formattedDate)
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
export const useCustomAxios = async (method: any, path: any, body?: any) => {
    const token = await getToken()
    const {response, error} = await customAxios({
        method, url: baseUrl + path ,
        headers: {'Authorization': `Bearer ${token}`},
        body
    })
    return {response, error}
}
// Fetch all the App data from the redux store
export const getAllAppData = async(store: any) => {
    store.dispatch(fetchUsers())
    store.dispatch(getAllTransactionsFromAPI())
}


