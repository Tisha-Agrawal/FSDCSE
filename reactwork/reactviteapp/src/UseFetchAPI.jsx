import React,{useState} from 'react'

function UseFetchAPI(){
    const [data,setData]=useState([])
    function getData(){

        const response = fetch("https://dummyjson.com/recipes")
        response.then((res)=>{
            console.log(res)
        res.json().then((data)=>{
            console.log(data)
            setData(data.recipes)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}
    return (
        
        <div>UseFetchAPI {
            
            
            data.map((ele)=>{
            console.log(data);
            
                return(
                    <div style={{}}>
                    <div><img src={ele.image} height={100} width={100}/></div>
                    <div>{ele.name}</div>
                    <div>{ele.ingredients}</div>
                    </div>

                        )
                    }
                )
            }
            <button onClick={getData}>Get data</button>
        </div>
            

    )
}

export default UseFetchAPI