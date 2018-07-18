'use strict';
let selEltotal = [];
function addToCart(){
	let selEl = document.getElementsByTagName('select');
	let cartTotalEl = document.getElementById("cartTotal-js");
	for(var i = 0; i < selEl.length; i++){
		if(selEl[i].value !== "0"){
			selEltotal.push(selEl[i].value);
			let sum = selEltotal.reduce((acc, val)=>{
				return acc + val;
			});
			cartTotalEl.innerHTML = sum;
		}
	}
}//end of function

const btnEl = document.getElementsByTagName('input');
for(var i = 0; i < btnEl.length; i++) {
	btnEl[i].addEventListener('click', addToCart);
}

