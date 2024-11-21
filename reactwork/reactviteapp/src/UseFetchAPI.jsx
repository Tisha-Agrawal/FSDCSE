import React,{useState} from 'react'

function UseFetchAPI(){
    const response = fetch("https://dummyjson.com/recipes")
    const [data,setData]=useState([])
    response.then((res)=>{
        console.log(res)
        res.json().then((data)=>{
            console.log(data)
            setData(data)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
    return (
        <div>UseFetchAPI 
            {JSON.stringify(data)}
        </div>

    )
}

export default UseFetchAPI