
// 使用函数式组件
import React from 'react'
import ReactDOM from 'react-dom'
// 用于链接 ui组件 和 包裹组件的函数
import {connect} from 'react-redux'
// action处理函数'
import {jia} from './redux/actionMakeer/Actions';



function App(prop) {
console.log(prop)
    //  卸载组件
    var ummount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
   var add = ()=>{
       prop.jia(1)
   }
    return (
        <div>
            Demo{prop.state.Count}
            <p onClick={add}>点我加一</p>
            <p onClick={ummount}>点我删除</p>
        </div>
    )
}
            //connct(返回一个对象reducer函数,action对象(自动将其dispatch))
var Count = connect((Readucer_obj) => ({ state: Readucer_obj }), {
    // 修改的方法 对象简写 这里redux底层会自动dispatch执行函数返回的action对象给reducer
    jia,
 
})(App)
export default Count
