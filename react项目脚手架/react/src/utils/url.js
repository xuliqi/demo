
/**
 * @description 获取url中的参数 适用于react参数跟在路由后面
 * @param name 获取参数的名称
 * @returns {String} 获取的参数值
 */
function newGetUrlParam(name) {
    var reg = new RegExp("(^|&|)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.hash.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

/**
 * @description 获取url中的参数
 * @param name 获取参数的名称
 * @returns {String} 获取的参数值
 */
function getetUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

export default{
    newGetUrlParam,
    getetUrlParam
}