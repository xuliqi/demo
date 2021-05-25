
// console.log("当前环境是:", process.env.NODE_ENV)
let LXF_baseUrl = 'http://192.168.2.93:7001/'
let SXG_baseUrl = 'http://192.168.2.78:7001/'
LXF_baseUrl = SXG_baseUrl = 'http://39.104.135.186:8001/'
// LXF_baseUrl = SXG_baseUrl = 'http://www.sino-med.net:7001/'
// 测试环境地址
if (process.env.NODE_ENV === "test") {
    LXF_baseUrl = SXG_baseUrl = 'http://39.104.135.186:8001/'
}

// 正式环境地址
if (process.env.NODE_ENV === "production") {
    LXF_baseUrl = SXG_baseUrl = 'http://www.sino-med.net:7001/'
}

export default{
    LXF_baseUrl,
    SXG_baseUrl
}


