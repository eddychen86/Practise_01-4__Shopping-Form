var wallet = document.getElementById("address");
var warr = document.getElementById("warr");

$(document).ready(function(){
    
    $("button").click(
        function check() {
            if ( wallet.value === "" ) {
                warr.innerHTML = "請填寫錢包地址";
                console.log("請填寫錢包地址");
                return false;
            } else {
                alert("感謝您的購買");
            }
        }
    );
        
    $("#address").keyup(
        function check () {
            if ( wallet.value.length < 10 ) {
                warr.innerHTML = "至少10碼(實際為42亂碼)";
                console.log("至少10碼");
                return false;
            } else {
                warr.innerHTML = "";
                console.log("成功");
            }
            $.cookie("wallet",wallet.value);
        }
    );

    
});

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
var realname = getCookieByName("name");
var email = getCookieByName("email");
var username = getCookieByName("username");
var password = getCookieByName("password");
var wallet_address = getCookieByName("wallet");

document.getElementById("name").value = realname;
document.getElementById("email").value = email;
document.getElementById("username").value = username;

console.log(number, price, realname, email, username, password, wallet_address);