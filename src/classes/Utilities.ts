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
