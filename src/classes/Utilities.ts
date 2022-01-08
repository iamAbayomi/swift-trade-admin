import axios from "axios"
import moment from "moment"

/** This function takes in the created data value from the API 
 *  and formats it into the DD-MM-YYYY format.
*/ 
export function formatDate(unformattedData : any){
    // let date = new Date(unformattedData)
    let formattedDate = moment(unformattedData).format('DD-MM-YYYY')
    console.log(formattedDate)
    return formattedDate
}

// export function getUserProfile(token: string, userId: string): any{
//     axios.get(`https://swift-trade-v1.herokuapp.com/api/v1/user/${userId}/info`,{
//             headers: {'Authorization' : `Bearer ${token}`}} )
//     .then((res: any)=>{
//             console.log('This is the data', res)
//             return res
//         }).catch((err) => { console.log(err)})
// }


// This get the user profile from the API and returns the data
export function getUserProfile(token: string, userId: string): any{
    return axios.get(`https://swift-trade-v1.herokuapp.com/api/v1/user/${userId}/info`,
        {headers: {'Authorization' : `Bearer ${token}`}} )
    .then((res: any)=> res.data.data)
}


//export function 