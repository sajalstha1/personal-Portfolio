var nav=document.getElementById("navdropdown");
var all=document.getElementById("all");
function close(){
    nav.style.display='none';
    all.style.display="block";
}

function dropdownmininav(){
    
    if (nav.style.display==="block"){
        nav.style.display="none";
        all.style.display="block";
    }
    else {
        nav.style.display="block";
        all.style.display="none";
    }
}

function dropdowndeveloper(){
    var x=document.getElementById("developerdropdown");
    if (x.style.display==="block"){
        x.style.display="none";
    }
    else {
        x.style.display="block";
    }
}

function dropdowndesigner(){
    var y=document.getElementById("designerdropdown");
    if (y.style.display==="block"){
        y.style.display="none";
        upp.style.display="block";
        downn.style.display="none";
    }
    else {
        y.style.display="block";
        upp.style.display="none";
        downn.style.display="block";
    }
}

function show1(){
    var x=document.getElementById("option1");
    var y=document.getElementById("nonshow1");
        x.style.display="flex";
        y.style.display="none";
}

function return1(){
    var x=document.getElementById("option1");
    var y=document.getElementById("nonshow1");
        x.style.display="none";
        y.style.display="flex";
}

function show2(){
    var x=document.getElementById("option2");
    var y=document.getElementById("nonshow2");
        x.style.display="flex";
        y.style.display="none";
}

function return2(){
    var x=document.getElementById("option2");
    var y=document.getElementById("nonshow2");
        x.style.display="none";
        y.style.display="flex";
}
