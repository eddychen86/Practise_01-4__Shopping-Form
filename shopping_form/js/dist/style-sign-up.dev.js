"use strict";

$("#password").keyup(function check() {
  var value = $("#password").val();

  if (value.length < 8) {
    $("#warr").text("密碼至少8字元");
    return false;
  } else {
    $("#warr").text("");
  }
});
$("#pwd-check").keyup(function check() {
  var x = $("#password").val();
  var y = $("#pwd-check").val();

  if (x != y || y.length < 8) {
    $("#warr").text("密碼不正確");
    return false;
  } else {
    $("#warr").text(""); // console.log("成功");
  }
});
var n = document.getElementById("name");
var mail = document.getElementById("email");
var un = document.getElementById("username");
var pwd = document.getElementById("password");
var pwd_check = document.getElementById("pwd-check");
$(document).ready(function () {
  $("button").click(function check() {
    if (n.value === "") {
      alert("姓名未填");
      console.log("姓名未填");
      return false;
    } else if (mail.value === "") {
      alert("信箱未填");
      console.log("信箱未填");
      return false;
    } else if (un.value === "") {
      alert("帳號未填");
      console.log("帳號未填");
      return false;
    } else if (pwd.value === "") {
      alert("密碼未填");
      console.log("密碼未填");
      return false;
    } else if (pwd.value.length < 8) {
      console.log("密碼太短");
      return false;
    } else if (pwd_check.value === "") {
      alert("請在填寫一次密碼");
      console.log("請在填寫一次密碼");
      return false;
    } else if (pwd_check.value != pwd.value) {
      alert("密碼不正確");
      console.log("密碼不正確");
      return false;
    } else {
      // console.log(n.value, mail.value, un.value, pwd_check.value);
      $.cookie("name", n.value);
      $.cookie("email", mail.value);
      $.cookie("username", un.value);
      $.cookie("password", pwd_check.value);
      console.log(document.cookie("name", n.value)); // console.log("成功");
    }

    $.post("https://www.townway.com.tw/auth", {
      realname: $("#name").val(),
      mail: $("#email").val(),
      username: $("#username").val(),
      password: $("#pwd-check").val()
    }, function (data, status) {
      $("#warr").text("資料: \n" + data + "\n狀態: " + status);

      if (data != "wrong password") {
        $.cookie("authKey", data);
        var key = $.cookie("authKey");
        console.log(key, "成功"); // location.href = "shopping-info.html";
      } else {
        return false;
      }
    });
  });
});