'use strict';

var link = document.querySelector(".btn--address");
var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".feedback-form__close");

var shadow = document.querySelector(".modal-overlay");

var form = popup.querySelector(".feedback-form__form");
var login = popup.querySelector(".feedback-form__user");
var password = popup.querySelector(".feedback-form__password");
var storage = localStorage.getItem("login");

// Открытие окна
link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  shadow.classList.add("modal-overlay-shadow");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

// закрытие окна
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
  shadow.classList.remove("modal-overlay-shadow");
});

// закрытие на esc
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
      shadow.classList.remove("modal-overlay-shadow");
    }
  }
});

