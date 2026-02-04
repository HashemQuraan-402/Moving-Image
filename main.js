let stars = document.getElementById('stars1');
let moon = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river5');
let boat = document.getElementById('boat6');
let nodCry = document.querySelector('.nodCry');

onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*3 + 'px';
    mountains3.style.top = value*1.5 + 'px';
    mountains4.style.top = value*1 + 'px'
    river.style.top = value*0.7 + 'px';
    boat.style.top = value*0.7 + 'px';
    boat.style.left = value*3 + 'px';
    nodCry.style.fontSize = value + 'px';
    if(scrollY>=61){
        nodCry.style.fontSize = 61 + 'px';
        nodCry.style.position = "fixed";
        if(scrollY>=200){
            moon.style.display = "none";
            document.querySelector(".main").style.background = 'linear-gradient(#3374eb, #5e10a7)';
        }else{
            moon.style.display = "block";
            document.querySelector(".main").style.background = 'linear-gradient(#200016,#10001f)';
        }
    }
}



function TurnTheRole(id){
    if(id == 'home'){

    }else{
        document.getElementById(id).className = "active";
        document.getElementById('home').className = "";
    }
}
function returnTheRole(id){
    document.getElementById(id).className = "";
    document.getElementById('home').className = "active";
}
