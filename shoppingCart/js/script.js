'use strict';
//this function puts the number of items in the cart in the <p> with the id=cartTotal-js
let selEltotal = [];
function addToCart(){
	let selEl = document.getElementsByTagName('select');
	let cartTotalEl = document.getElementById("cartTotal-js");
	for(var i = 0; i < selEl.length; i++){
		if(selEl[i].value !== "0"){
			selEltotal.push(Number(selEl[i].value));
			let sum = selEltotal.reduce((acc, val)=>{
				return acc + val;
			}, 0);
			cartTotalEl.innerHTML = " " + sum;
		}
	}
	let hatContainer = document.getElementById('hatContainer');
	hatContainer.classList.add('is-hidden');

	let registerItems = document.getElementById('registerItems');
	registerItems.classList.remove('is-hidden');
}//end of function

//add event listeners to all buttons with the name 'add'
//run the function 'addToCart' when the button is clicked. 
const btnEl = document.getElementsByName('add');
for(var i = 0; i < btnEl.length; i++) {
	btnEl[i].addEventListener('click', addToCart);
}


//reset page to beginning
function resetPage(){
	let hatContainer = document.getElementById('hatContainer');
    let registerItems = document.getElementById('registerItems');
    hatContainer.classList.remove('is-hidden');
    registerItems.classList.add('is-hidden');
}
//create cancel button and run 'resetPage' when clicked.
const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', resetPage);


/*hatConfig.forEach(function(hat){
	if(hat.quantity !== 0){

	}

});
*/


/*
1. I use a forEach loop to iterate over my array and check the quantity property. 
How do I get the 'addToCart' function working with this kind of loop?

2. when I loop over the array and check quantity, I set a variable for the 
subtotal on those hats whose quantity is !== 0. (let subtotal = hat.quantity * hat.price)
When I output 'subtotal' it only put out the last value of the array instead of adding everything
together.  Why?
*/
