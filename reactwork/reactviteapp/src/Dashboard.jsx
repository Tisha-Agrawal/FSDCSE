import React, { useState } from 'react'

function Dashboard() {
    const[data,setData]=useState([]);
    function getonlineData(){
        const onlineData=fetch("https://dummyjson.com/recipes");
        onlineData.then((response)=>{
            response.json().then((res)=>{
                console.log(res.recipes)
                setData(res.recipes);

            })
        })
    }
// useEffect(getonlineData(),[]);
getonlineData();

  return (
    <div>Dashboard
        {
            data.map((ele)=>{
                return(<div>
                    <div><img src={ele.image} height="300" width="300"/></div>
                    <div>{ele.name}</div>
                </div>)

            }
        )
        }
    </div>
  )
}

export default Dashboard