function quantity(){
    var nb = document.getElementById("pb-quantity").value;
    var price = Number(document.getElementById("pb-price").innerHTML);
	
    if (nb === "null") {
        document.getElementById("pb-price").innerHTML = "0";
        document.getElementById("warr").innerHTML = "請選擇數量";
        price = 0;
    } else if (nb == "1") {
		document.getElementById("pb-price").innerHTML = "0.01";
        document.getElementById("warr").innerHTML = "";
        price = 0.01;
    } else if (nb == "2") {
        document.getElementById("pb-price").innerHTML = "0.02";
        document.getElementById("warr").innerHTML = "";
        price = 0.02;
    } else if (nb == "3") {
        document.getElementById("pb-price").innerHTML = "0.03";
        document.getElementById("warr").innerHTML = "";
        price = 0.03;
    }

    $.cookie("quantity",nb);
    $.cookie("price",price);

    // console.log(document.cookie);

}

function parseCookie() {
    var cookieObj = {};
    var cookieAry = document.cookie.split(';');
    var cookie;
    
    for (var i=0, l=cookieAry.length; i<l; ++i) {
        cookie = jQuery.trim(cookieAry[i]);
        cookie = cookie.split('=');
        cookieObj[cookie[0]] = cookie[1];
    }

    return cookieObj;
}

function getCookieByName(name) {
    var value = parseCookie()[name];
    if (value) {
        value = decodeURIComponent(value);
    }
    return value;
}

var number = getCookieByName("quantity");
var price = getCookieByName("price");

console.log(number, price);

function check(){
    var nb = document.getElementById("pb-quantity").value;
    
    if (nb === "null") {
        document.getElementById("warr").innerHTML = "請選擇數量";
        return false;
    } else if (nb != "null") {
        location.href = "sign-up.html";
    }
}