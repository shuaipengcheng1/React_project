// 头部
import React,{useEffect} from 'react'

import axios from 'axios'

export const Title = (props) => {
    useEffect(()=>{
       async function fetchData(){
         var data=  await axios({
               url:"http://localhost:5000/Title/data",
               method:"GET"
           })
           console.log(data)
       }
       fetchData()
    })
    return (

        <div>
            
        </div>
    )
}



export default Title
