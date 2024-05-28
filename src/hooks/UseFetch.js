import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"

// ={} The parameters are set to an empty object by default
export default function useFetch(url, { method, headers, body } = {}) {
    const [data, setData] =useState()
    const [errStatus, setErrStatus] = useState()
    const navigate = useNavigate()
    const location = useLocation()

   function request() {
    fetch(url,{
        method: method,
        headers: headers,
        body: JSON.stringify(body),
    })
    .then((response) => {
        if(response.status === 401){
            navigate('/login', {
                state: {
                    previousUrl: location.pathname
                }
            })
        }
        if (!response.ok) {
            setErrStatus(response.status)
            throw response.status
        }

        return response.json()
    })
    .then((data) => {
        setData(data)
    })
    .catch((err) => {
        setErrStatus(err)
    })
   }

   function appendData(newData){
    fetch(url,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newData)
    }).then((response) => {
        if(response.status === 401){
            navigate('/login',{
                state:{
                    previousUrl:location.pathname
                }
            })
        }
        if(!response.ok){
            throw response.status
        }
        return response.json()
    }).then((d) => {
        // console.log(data)
        const submitted = Object.values(d)[0]
        const newState = { ...data }
        Object.values(newState)[0].push(submitted)
        setData(newState)
    }).catch((err) => {
        console.log(err)
        setErrStatus(err)
    })
   }

    return { request, appendData, data, errStatus }
    
}