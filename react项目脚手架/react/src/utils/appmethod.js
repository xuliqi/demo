
/* eslint-disable */
/**
 * @description 调用app内的方法
 * @param {string} funName  要调用的方法的名称
 * @param {object} funParam  传入的参数对象
 */
function userAppmethods(funName, funParam) {
    if (sessionStorage.getItem('isPC') == 'pc' && (funName == 'OpenUrl' || funName == 'PlayPolyvVideo')) { // 判断是否在pc端进行页面的跳转
        window.location.href = funParam.url
    }
    var obj = {
        MethodName: funName,
        Parameters: funParam
    }
    console.log(obj)
    try {
        MobileNa.call(JSON.stringify(obj)) // 调用安卓端的方法
    } catch (err) {}

    try {
        MobileNaCall(JSON.stringify(obj)) // 调用IOS端的方法
    } catch (err) {}


}

export default {
    userAppmethods
}