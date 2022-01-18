import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { getToken } from "../classes/User"
import { baseUrl } from "../classes/Utilities"
import { fetchUsers } from "../reducers/UsersSlice"
import useAxios from "../classes/CustomAxios"

const TestPage: React.FC = () => {
    const dispatch = useDispatch()
    const token =   getToken()

    const {response, loading, error} =  useAxios({
        method: 'GET',
        url: baseUrl + 'user',
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    console.log('From the user slice ' , response.first_name)
    
    useEffect(()=>{
    
    })
    
    return(
        <div>
            {/* <p>{response} </p> */}
        </div>
    )
}

export default TestPage