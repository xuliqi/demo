"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:5001/MonitorHub?bedID=100").build();

//Disable send button until connection is established
//document.getElementById("sendButton").disabled = true;

connection.on("SendMonitorData", function (monitorData) {
    document.getElementById("hr").textContent = monitorData.hr;
    document.getElementById("spo2").textContent = monitorData.spO2;
    document.getElementById("blood").textContent = monitorData.nibps + "/" + monitorData.nibpd;
});

connection.start().then(function () {
    //document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("login").addEventListener("click", function (event) {
    $.ajax({
        type: "post",
        url: 'https://192.168.2.60:5001/api/login',
        async: false, // 使用同步方式  
        // 1 需要使用JSON.stringify 否则格式为 a=2&b=3&now=14...  
        // 2 需要强制类型转换，否则格式为 {"a":"2","b":"3"}  
        data: JSON.stringify({
            password: "qd@2004grid",
            loginName: "medcare"  
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#result').text(data.result);
        }
    });  
});
//document.getElementById("sendButton").addEventListener("click", function (event) {
//    var user = document.getElementById("userInput").value;
//    var message = document.getElementById("messageInput").value;
//    connection.invoke("SendMessage", user, message).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//});