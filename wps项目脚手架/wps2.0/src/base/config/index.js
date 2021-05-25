
console.log(window.baseDataUrl,'设置打包后可配置的接口地址')

// 判断传输协议是http还是https
let protocol = 'http://'

if (location.protocol == "https:") { 
    protocol = 'https://'
}

let baseUrl = "";//接口基地址
let wsUrl = "";//websocket基地址

//开发环境下的配置
if(HTTP_ENV === 'development'){
    // baseUrl = "121.42.48.71:8080/";
    // baseUrl = "192.168.172.100:450/";
    baseUrl = "192.168.2.78:54382/";
    wsUrl = "ws://192.168.2.78:54382/";
}

//测试环境下的配置
if(HTTP_ENV === 'test'){
    baseUrl = "192.168.2.91:8080/";
    wsUrl = "ws://192.168.2.91:8080/";
}

//生产环境下的配置
if(HTTP_ENV === 'production'){
    baseUrl = "192.168.172.100:450/";
    // baseUrl = "192.168.2.78:54382/";
    wsUrl = "ws://192.168.172.100:450/";
}

baseUrl = protocol + baseUrl;

export {baseUrl,wsUrl};