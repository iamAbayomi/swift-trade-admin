import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getToken } from "../classes/User"
import { baseUrl } from "../classes/Utilities"
import { fetchUsers, showCurrentUsers, showUsers } from "../redux/reducers/UsersSlice"
import useAxios from "../classes/CustomAxiosHook"
import MenuOptions from "../components/MenuOptions/MenuOptions"


const TestPage: React.FC = () => {
    const dispatch = useDispatch()
    const users: any = useSelector<any[]>(showCurrentUsers)
    const [userProfile, setUserProfile] = useState<any>({})

    function showUsersFromState(){
        console.log('This is the value in the user state', users)
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

            <MenuOptions />
        </div>
    )
}

export default TestPage


