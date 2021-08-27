// 处理加法的纯函数

var init = 0 //默认值
var Count = function (prevstate = init, action) {
    // 解构赋值
    var { type, data } = action
    switch (type) {
        case 'jia': return prevstate += data
        default: return prevstate
    }
}
export default Count