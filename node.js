var hoursSp =  document.getElementById("hours");
var minSp =  document.getElementById("min");
var secSp =  document.getElementById("sec");
var ampm = document.getElementById("am/pm") 
var monthoftoday = document.getElementById("month")
var dayoftoday = document.getElementById("day")
var dateoftoday = document.getElementById("date")
var currentyear = document.getElementById("year")

setInterval(()=>{

    
    


    var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct :","Nov","Dec"]
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday :","Friday :","Saturday :"]
    var time = new Date();
    
    minSp.innerText =time.getMinutes()
    secSp.innerText = time.getSeconds()
    var month = time.getMonth()
    monthoftoday.innerText = monthNames[month]
    var day = time.getDay()
    dayoftoday.innerText = dayNames[day]
    dateoftoday.innerText = time.getDate()
    currentyear.innerText = time.getFullYear()

    var hours = time.getHours()
    if(hours===0){
        hoursSp.innerText = 12
        ampm.innerText = "AM"
    }else if(hours > 11){
        hoursSp.innerText = hours % 12
        ampm.innerText = "PM"
    }else if(hours < 11){
        hoursSp.innerText = hours
        ampm.innerText = "AM"
    } 


}, 1000) 




// var rightNow = new Date()
// var dateString = rightNow.toString()
// var day = rightNow.getDay()
// var nameoftoday = dayNames[day]
// var month = rightNow.getMonth()
// var monthoftoday = monthNames[month]
// var year = rightNow.getFullYear()
// console.log(year)
// var test = prompt("enter time")
// if (test==0){
//     test = 12
// }else if(test > 12){
//     test = test % 12
    
// }
// console.log(test)