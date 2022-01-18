import axios from 'axios'
import { useEffect, useState } from 'react'

// Custom axios hooks 

const useAxios = (axiosParams: any) => {
    const [response, setResponse] = useState<any>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async (params: any) => {
        try{
            const result: any = await axios.request(params)
            console.log('I am here at the response in custom axios' , result)
            setResponse(result)
        }catch(error: any){
            setError(error)
        } finally{
            setLoading(false)
        } 
    }

    useEffect(() => {
        fetchData(axiosParams)
    }, []) // execute once only

    return {response, error, loading}
}

export default useAxios