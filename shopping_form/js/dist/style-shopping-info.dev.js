"use strict";

var wallet = document.getElementById("address");
var warr = document.getElementById("warr");
$(document).ready(function () {
  $("button").click(function check() {
    if (wallet.value === "") {
      warr.innerHTML = "請填寫錢包地址";
      console.log("請填寫錢包地址");
      return false;
    } else {
      alert("感謝您的購買");
    }
  });
  $("#address").keyup(function check() {
    if (wallet.value.length < 10) {
      warr.innerHTML = "至少10碼";
      console.log("至少10碼");
      return false;
    } else {
      warr.innerHTML = "";
      console.log("成功");
    }
  });
});