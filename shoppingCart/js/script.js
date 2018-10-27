'use strict';
//this function displays the number of items in the cart.
function addToCart(){
	const cartItems = [];
	const cartTotalEl = document.getElementById('cartTotal-js');
	hatConfig.forEach(function(hat){
		if(hat.quantity > 0){
			cartItems.push(hat);
		}
	});

	const productTotal = cartItems.reduce((acc, hat)=>{
				return acc + Number(hat.quantity);
			}, 0);
	cartTotalEl.innerHTML = " " + productTotal;
    
	calculateTotal();
}//end of addTocart function


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
			//push selected hat to the cartItems array.
			cartItems.push(hat);
		}
	});
	//reduce cartItems array to one number stored in 'const subtotal'.
	const subtotal = cartItems.reduce((acc, hat)=>{
		return acc + Number(hat.quantity * hat.price);
	}, 0);
	
	//use subtotal for price calculations
	let tax_percent = 0.08;
	let tax = (subtotal * tax_percent).toFixed(2);
	let grandTotal = ((subtotal * tax_percent) + subtotal).toFixed(2);

    //output results into their respective html elements.
	subtotalEl.innerHTML = "$" + subtotal;
	taxEl.innerHTML = "$" + tax;
	grandTotalEl.innerHTML = "$" + grandTotal;
    
}//end of calculateTotal function

function reset(){
	//get reference to HTML element where I will output the result of the calculations
	let subtotalEl = document.getElementById('subTotal-js');
	let taxEl = document.getElementById('tax-js');
	let grandTotalEl = document.getElementById('grandTotal-js');
	const cartTotalEl = document.getElementById('cartTotal-js');
	const selectEl = document.getElementsByTagName('select');
    
    //set the innerHTML of each element back to an empty string
	subtotalEl.innerHTML = " ";
	taxEl.innerHTML = " ";
	grandTotalEl.innerHTML = " ";
	cartTotalEl.innerHTML = " ";
    
    //set select menus back to 0
	for(var i = 0; i < selectEl.length; i++){
		if(selectEl[i].value > 0){
			selectEl[i].value = 0;
		}
	}
	//set hat.quantity property back to 0
	hatConfig.forEach(function(hat){
		if(hat.quantity > 0){
			hat.quantity = 0;
		}
	});

	//remove class 'isSelected'
    const addBtn = document.getElementsByName('add');
    for(var i = 0; i < addBtn.length; i++){
        if(addBtn[i].classList.contains('isSelected')){
            addBtn[i].classList.remove('isSelected');
        }   
    }
}//end of reset function

/************************************************************************
BUTTON FARM - Event listeners for buttons and change events
*************************************************************************/
function initButtonListeners(){
	//addToCart button and reset button
	document.addEventListener('click', function(e) {
		if(e.target.classList.contains('isSelected')) {
			addToCart(e);
		}else if(e.target.classList.contains('btn--reset')){
    		reset(e);
    	}
	});

	/*reset button
	let resetbtn = document.getElementById('reset');
	resetbtn.addEventListener('click', reset);
	*/

}//end of initButtonListeners()


function initChangeListners(){
	//event listener and function to update the quantity property of the hat object
	//according to the value selected with the drop down menu.
	document.addEventListener('change', function(e) {
	    // get hat id from e.target.dataset
	    const selectedHatID = e.target.dataset.id;
	    //loop through all hat objects in hatConfig array
	    hatConfig.forEach(function(hat){
	       //if the id of the select menu matches the id of the hat object
	       //update the hat quantity with the value of the select menu.
	       if(selectedHatID === hat.id){
	          hat.quantity = e.target.value;
	        }
	        /*else if (hat.quantity < e.target.value){
	        	addToCart();
	        }
	        */
	        /*I feel like I need to store the selected hats somewhere so I can compare their 
	         value to the current value of the target. Right now the hat.quantity = the target
	         value. */
	    });
	  
	    //get a reference to all buttons with name 'add'
	    const addBtn = document.getElementsByName('add');
	    //loop through buttons and add class if selectedHatID === button ID
	    for(var i = 0; i < addBtn.length; i++){
	        if(selectedHatID === addBtn[i].id){
	            addBtn[i].classList.add('isSelected');
	        } 
	    }
	});
}//end of initChangeListners()


function Init(){
	initButtonListeners();
	initChangeListners();
}
Init();

/*
reference to addtocart above - I like this b/c only add the event listener once. I did have to 
remove the btn class from the 'reset' btn. It was causing the output 
fields to be populated with $0.00 instead of clearing out when I clicked the
reset btn. I then added a few of the 'btn' styles to the 'btn--reset' class 
and that fixed the look of the button and the output fields no longer populate
with $0.00. It's just empty.
*/

