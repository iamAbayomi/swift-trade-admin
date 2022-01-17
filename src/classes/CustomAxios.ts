import axios from 'axios'
import { useEffect, useState } from 'react'

export const useAxios = (axiosParams: any) => {
    const [response, setResponse] = useState(undefined)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async (params: any) => {
        try{
            const result = await axios.request(params)
            setResponse(result.data)
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