'use strict';
//this function displays the number of items in the cart.
function addToCart(){
	const cartItems = [];
	const cartTotalEl = document.getElementById('cartTotal-js');
	hatConfig.forEach(function(hat){
		if(hat.quantity > 0){
			cartItems.push(Number(hat.quantity));
			const sum = cartItems.reduce((acc, val)=>{
				return acc + val;
			}, 0);
			cartTotalEl.innerHTML = " " + sum;
		}
	});
}//end of addTocart function

//add click listener to button if that hat has been selected
document.addEventListener('change', function(e){
    // get hat id from e.target.dataset
    const selectedHatID = e.target.dataset.id;
    //get all 'add to cart' buttons
    const addBtn = document.getElementsByName('add');
    for(let i = 0; i < addBtn.length; i++){
        //if selectedHatID equals button id then add click listener
        if(selectedHatID === addBtn[i].id){
            addBtn[i].addEventListener('click', addToCart);
        }
    }
});



//function to calculate total
function calculateTotal(){
	//get reference to HTML element where I will output the result of the calculations
	let subtotalEl = document.getElementById('subTotal-js');
	let taxEl = document.getElementById('tax-js');
	let grandTotalEl = document.getElementById('grandTotal-js');
    
    //array to store (hat.quantity * hat.price) of each selected hat
    const cartItems = [];

    //loop through all hats 
    hatConfig.forEach(function(hat){
		if(hat.quantity > 0){
			//put selected hat quantity * selected hat price into cartItems array.
			cartItems.push(Number(hat.quantity * hat.price));
			
			//reduce cartItems array to one number stored in 'const subtotal'.
			const subtotal = cartItems.reduce((acc, val)=>{
				return acc + val;
			}, 0);
			
			//use subtotal for price calculations
    		let tax_percent = 0.08;
    		let tax = (subtotal * tax_percent).toFixed(2);
    		let grandTotal = ((subtotal * tax_percent) + subtotal).toFixed(2);

            //output results into their respective html elements.
			subtotalEl.innerHTML = "$" + subtotal;
			taxEl.innerHTML = "$" + tax;
			grandTotalEl.innerHTML = "$" + grandTotal;
		}
	});
}//end of calculateTotal function

//checkout button event listener
const chkOut_btn = document.getElementById('checkout');
chkOut_btn.addEventListener('click', calculateTotal);

function reset(){
	//get reference to HTML element where I will output the result of the calculations
	let subtotalEl = document.getElementById('subTotal-js');
	let taxEl = document.getElementById('tax-js');
	let grandTotalEl = document.getElementById('grandTotal-js');
	const cartTotalEl = document.getElementById('cartTotal-js');
	const selectEl = document.getElementsByTagName('select');
    
    //set the innerHTML of each element back to nothing
	subtotalEl.innerHTML = " ";
	taxEl.innerHTML = " ";
	grandTotalEl.innerHTML = " ";
	cartTotalEl.innerHTML = " ";
    
    //loop through all the select tags and if the value was greater than 0, set it back to 0
	for(var i = 0; i < selectEl.length; i++){
		if(selectEl[i].value > 0){
			selectEl[i].value = 0;
		}
	}   
    
    //the previous value is still in the reduced array stored in 'sum'. I need to get a copy of
    //that array and make it available to this function. OR just make it available to start with.
}

//get reference to reset button and add event listener to run 'reset' function
const resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', reset);
