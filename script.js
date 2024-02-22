var popBox= document.querySelector(".pop");
var message = document.querySelector(".message");
var del = document.querySelector(".delete");
var sms = document.querySelector(".sms");

message.addEventListener("click", ()=>{
    popBox.classList.add("open");
    sms.classList.add("end");
})
del.addEventListener("click", ()=>{
    popBox.classList.remove("open");
    sms.classList.remove("end");
})