import axios from "axios";
import { useEffect, useState } from "react";

const customAxios = async (axiosParams: any)=> {
    let response: any, error: any, loading: any
    try{
        const result: any = await axios.request(axiosParams)
        response = result
        console.log("This is the ", result, " and the axios params" , axiosParams)
    }
    catch(err: any){
        error = err
         console.log("This is the ", error)
    }
    
    return {response, error}
}

export default customAxios