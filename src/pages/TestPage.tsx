import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getToken } from "../classes/User"
import { baseUrl } from "../classes/Utilities"
import { fetchUsers } from "../reducers/UsersSlice"
import useAxios from "../classes/CustomAxios"

const showUsers = (state: any ) => state

const TestPage: React.FC = () => {
    const dispatch = useDispatch()
    const token =   getToken()

    const users: any = useSelector<any[]>(showUsers)

    // const {response, loading, error} =  useAxios({
    //     method: 'GET', url: baseUrl + 'user',
    //     headers: {'Authorization' : `Bearer ${token}`}
    // })
    // console.log('From the custom Axuis ' , response)
    
    useEffect(()=>{
        dispatch(fetchUsers())
    })
    
    return(
        <div>
            {
                users ? <p>{users.first_name} </p>
                : <div/>
            }
            <p>adda</p>
        </div>
    )
}

export default TestPage


