import React, { useState,useEffect} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import  '../style/Nav.css'
import '../Hooks/Request'
function Nav(){
    useEffect(() => {
        // 发送请求
        async function fetchData() {
  var data=await  axios({
        url:"http://localhost:5000/Nav/data",
        method:"GET"
    })
    console.log(data)
        }
        fetchData()
    })
    return(
        // 中间导航栏
        <div className="Nav">

        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
