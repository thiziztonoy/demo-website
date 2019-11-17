/**
 * This Project is only for Learning purpose.
 * Created By Mahbub Rashid Tonoy
 * All Credits Goes To Mahbub Rashid Tonoy
 * Please Do Not Try To Copy This Without The Permission of The Owner.
 * To Connect Mahbub Rashid Tonoy, Please Knock Him on Facebook. https://www.facebook.com/ThizIzTonoy
 */
function multipleUploadingCenter() {
    document.getElementById("hiddenElementContainer").style.display = "block";
    document.getElementById("custonMultipleUploadButton").style.display = "none";
}
function prizeSet(){
    var webtype = document.getElementById("sell").value;
    var prize;
    if( webtype == "business"){
        prize = "You Have To Pay: 25$";
    }
    else if( webtype == "blogging"){
        prize = "You Have To Pay: 17$";
    }
    else if( webtype == "personal"){
        prize = "You Have To Pay: 15$";
    }
    else if( webtype == "photography"){
        prize = "You Have To Pay: 20$";
    }
    else if( webtype == "portfolio"){
        prize = "You Have To Pay: 12$";
    }
    else if( webtype == "responsive"){
        prize = "You Have To Pay: 18$";
    }
    else if( webtype == "startup"){
        prize = "You Have To Pay: 22$";
    }
    else if(webtype == "not_selected"){
        prize = "Please Select Your Website Type."
        document.getElementById("display").style.color = "red";
    }
    document.getElementById("dispay").innerHTML = prize + "<br/>";
}
function setAnimation(){
    var anim1 = document.getElementById("anim1");
    var anim2 = document.getElementById("anim2");
    var anim3 = document.getElementById("anim3");
    var anim4 = document.getElementById("anim4");
    var anim5 = document.getElementById("anim5");
    var anim6 = document.getElementById("anim6");
    var anim7 = document.getElementById("anim7");
}