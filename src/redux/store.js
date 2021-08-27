// 给jsx准备的
// 创建store对象
import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

var store = createStore(Reducers,composeWithDevTools(applyMiddleware(thunk)))
export default store