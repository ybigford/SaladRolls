$(document).ready(function(){

    $(".salad1").slideDown(3000);
});


let response = document.getElementById("response");
let contactcontainer = document.getElementById("contactcontainer");
let clear = document.getElementById("form1");

function onResponse() {
    response.classList.add("on-response");
    contactcontainer.style.display = 'none';
}

function offResponse() {
    response.classList.remove("on-response");
    contactcontainer.style.display = 'flex';
    clear.reset();
}


