// 一个对象 代表reduce（处理action对象的纯函数{type:xxx,data:xxx}）的集合
import { combineReducers } from 'redux'
import Count from './reducer/Count'
export default combineReducers({
    Count
})
