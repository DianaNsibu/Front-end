var nav = document.getElementById("menu");

window.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop > 80){
        nav.style.backgroundColor = "rgb(1,1,1)"; 
    }
    else{
        nav.style.backgroundColor = "rgb(1,1,1,0.3)";  
    }     
});


