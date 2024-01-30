import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [data,SetData]=useState(null)
    useEffect(()=>{
        fetch(url).then(res =>{
            res.json()
            .then(result=>{
                SetData(result.products)
            })
        })
    },[])
    return data
}
export default useFetch