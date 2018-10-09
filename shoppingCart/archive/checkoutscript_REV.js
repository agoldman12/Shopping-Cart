'use strict';

function copyShipping(){
		  //get reference to the form elements
		  const shipFormEl = document.querySelector('.js-shipping-form');
		  const billFormEl = document.querySelector('.js-billing-form');
		  
    //check to see if shipping form is on the page
  	if(shipFormEl){
		  //get reference to all inputs in each form
		  const shippingEls = shipFormEl.querySelectorAll('input');
		  const billingEls = billFormEl.querySelectorAll('input');
  		
  		//if the checkbox is checked, set the billing input value = to shipping input value
  		if(checkboxEl.checked){
		     for(let i = 0; i < shippingEls.length; i++){
		        billingEls[i].value = shippingEls[i].value;
		     }
	  	}else { //if checkbox is NOT checked, set billing inputs to empty string 
		  	 for(let i = 0; i < shippingEls.length; i++){
		        billingEls[i].value = "";
		     }
		    //put focus on first name field
	     	billingEls[0].focus();
	  }
	}

};//end copyShipping()



//get reference to the checkbox and add the 'on change' event listener
const checkboxEl = document.getElementById("billAndShip");
checkboxEl.addEventListener('change', copyShipping);
