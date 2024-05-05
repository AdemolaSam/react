import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] =useState()
    const [errStatus, setErrStatus] = useState()
    useEffect(() => {
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                setErrStatus(response.status)
                console.log('logging...')
            }
            console.log('logging...')
            return response.json()
        })
        .then((data) => {
            setData(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    },[])
}