/**
 * This Project is only for Learning purpose.
 * Created By Mahbub Rashid Tonoy
 * All Credits Goes To Mahbub Rashid Tonoy
 * Please Do Not Try To Copy This Without The Permission of The Owner.
 * To Connect Mahbub Rashid Tonoy, Please Knock Him on Facebook. https://www.facebook.com/ThizIzTonoy
 */
function responsivejs() {
    var w = window.innerWidth;
    var i = document.getElementById("introid");
    var b = document.getElementById("workbox1");
    var b2 = document.getElementById("workbox2");
    var b3 = document.getElementById("workbox3");
    var wp = document.getElementById("workpannelElement");
    var work = document.getElementById("workpannelid");
    var btn1 = document.getElementById("orderbtns");
    var btn2 = document.getElementById("learnbtns");
    var r8 = document.getElementById("rightSide");
    var leftpan = document.getElementById("leftpan");
    var carousel = document.getElementById("customCarousel");
    btn1.setAttribute("class", "btn btn-outline-primary btn-lg order-btns");
    btn2.setAttribute("class", "btn btn-outline-info btn-lg learn-btns");
    i.setAttribute("class", "display-3 intro");
    if(w <= 1277){
        leftpan.setAttribute("class", "col-lg-3  leftside");
        r8.setAttribute("class", "col-lg-9  rightside text-center");
    }
    if(w <= 1208){
        b.style.marginTop = "5px";
        b2.style.marginTop = "5px";
        b3.style.marginTop = "5px";
        b.style.padding = "5px";
        b2.style.padding = "5px";
        b3.style.padding = "5px";
    }
    if(w <= 1100){
        carousel.style.height = "650px";
    }
    if(w <= 900){
        carousel.style.height = "550px";
    }
    if(w <= 804){
        b.style.marginTop = "2px";
        b2.style.marginTop = "2px";
        b3.style.marginTop = "2px";
        b.style.padding = "2px 0px";
        b2.style.padding = "2px 0px";
        b3.style.padding = "2px 0px";
    }
    if(w <= 600){
        carousel.style.height = "380px";
    }
    if(w <= 610){
        i.setAttribute("class", "display-4 intro");
        i.style.marginTop = "30px";
        r8.style.height = "370px";
    }
    if(w <= 500){
        i.style.marginTop = "5px";
    }
    if(w <= 400){
        carousel.style.height = "245px";
        b.style.width = "100%";
        b2.style.width = "100%";
        b3.style.width = "100%";
    }
    if(w <= 450){
        i.setAttribute("class", "intro");
        r8.style.height = "270px";
    }
    if(w <= 383){
        btn1.setAttribute("class","btn btn-outline-primary btn-sm");
        btn1.style.marginTop = "10px";
        btn2.setAttribute("class","btn btn-outline-info btn-sm");
        btn2.style.marginTop = "10px";
    }
    if(w <= 360){
        i.style.marginTop = "40px";
        i.style.fontSize = "30px";
        r8.style.height = "250px";
        console.log(w);
    }
    if(w <= 340){
        work.style.height = "700px";
    }
    if(w <= 270){
        i.style.marginTop = "10px";
    }
    if(w <= 230 ){
        work.style.height = "750px";
    }
    if(w <= 200){
        i.style.marginTop = "0px";
        i.style.fontSize = "26px";
        carousel.style.height = "130px";
    }
    
    
}
function responsivejs_order() {
    var w = window.innerWidth;
    var b = document.getElementById("workbox1");
    var b2 = document.getElementById("workbox2");
    var b3 = document.getElementById("workbox3");
    var wp = document.getElementById("workpannelElement");
    var work = document.getElementById("workpannelid");
    var r8 = document.getElementById("rightSide");
    var leftpan = document.getElementById("leftpan");
    var carousel = document.getElementById("customCarousel");
    if(w <= 1277){
        leftpan.setAttribute("class", "col-lg-3  leftside");
        r8.setAttribute("class", "col-lg-9  rightside rightside-slider text-center");
    }
    if(w <= 1208){
        b.style.marginTop = "5px";
        b2.style.marginTop = "5px";
        b3.style.marginTop = "5px";
        b.style.padding = "5px";
        b2.style.padding = "5px";
        b3.style.padding = "5px";
    }
    if(w <= 1100){
        carousel.style.height = "650px";
    }
    if(w <= 900){
        carousel.style.height = "550px";
    }
    if(w <= 804){
        b.style.marginTop = "2px";
        b2.style.marginTop = "2px";
        b3.style.marginTop = "2px";
        b.style.padding = "2px 0px";
        b2.style.padding = "2px 0px";
        b3.style.padding = "2px 0px";
    }
    if(w <= 600){
        carousel.style.height = "380px";
    }
    if(w <= 610){
        r8.style.height = "370px";
    }
    if(w <= 400){
        carousel.style.height = "245px";
        b.style.width = "100%";
        b2.style.width = "100%";
        b3.style.width = "100%";
    }
    if(w <= 450){
        r8.style.height = "270px";
    }
    if(w <= 340){
        work.style.height = "700px";
    }
    if(w <= 360){
        r8.style.height = "250px";
        console.log(w);
    }
    if(w <= 230 ){
        work.style.height = "750px";
    }
    if(w <= 200){
        carousel.style.height = "130px";
    }
    
    
    
}