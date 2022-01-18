import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getToken } from "../classes/User"
import { baseUrl } from "../classes/Utilities"
import { fetchUsers } from "../reducers/UsersSlice"
import useAxios from "../classes/CustomAxiosHook"

const showUsers = (state: any ) => state

const TestPage: React.FC = () => {
    const dispatch = useDispatch()
    const users: any = useSelector<any[]>(showUsers)

    function showUsersFromState(){
        console.log('This is the value in the usesr state', users)
    }

    useEffect(()=>{
        dispatch(fetchUsers())
        showUsersFromState()
    })
    
    return(
        <div>
            {
                users ? <p>{JSON.stringify(users)} </p>
                : <div/>
            }
            <p>adda</p>
        </div>
    )
}

export default TestPage


