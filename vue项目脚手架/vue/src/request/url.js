let webSocketUrl = null
if (process.env.NODE_ENV === 'development') {
    webSocketUrl = 'http://192.168.2.120:5555/'
} else {
    webSocketUrl = 'http://192.168.2.120:5555/'
}

export default { webSocketUrl }