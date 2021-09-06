
// 使用函数式组件
import React from 'react'
// import ReactDOM from 'react-dom'
// 用于链接 ui组件 和 包裹组件的函数
// import {connect} from 'react-redux'
import Nav from './component/Nav'
import Title from './component/Title'
function App() {
    return (
        <div>
            <Nav></Nav>
            <Title />
        </div>

    )
}
export default App