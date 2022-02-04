"use strict";

function quantity() {
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

  $.cookie("quantity", nb);
  $.cookie("price", price);
  console.log(document.cookie);
}

function check() {
  var nb = document.getElementById("pb-quantity").value;

  if (nb === "null") {
    document.getElementById("warr").innerHTML = "請選擇數量";
    return false;
  } else if (nb != "null") {
    location.href = "sign-up.html";
  }
}