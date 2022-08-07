"use strict"

let button = document.querySelector("#btn");
let img = document.querySelector(".img");
let item = 0;

button.addEventListener("click", () => {
	if(item == 0) {
		img.hidden = false;
		button.innerHTML = "Скрыть";
		item = 1;
	}
	else {
		img.hidden = true;
		button.innerHTML = "Узнать ответ";
		item = 0;
	}
}); 