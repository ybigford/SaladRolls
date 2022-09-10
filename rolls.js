$(document).ready(function(){

    $(".salad1").slideDown(5000);
});


let response = document.getElementById("response");
let contactcontainer = document.getElementById("contactcontainer")

function onResponse() {
    response.classList.add("on-response");
    contactcontainer.style.display = 'none';
}

function offResponse() {
    response.classList.remove("on-response");
    contactcontainer.style.display = 'flex';
}


