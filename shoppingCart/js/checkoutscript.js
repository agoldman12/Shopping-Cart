'use strict';

function getShippingInfo() {

    const formEl = document.querySelector('.js-shipping-form');
    const inputEl = Array.from(formEl.querySelectorAll('input'));
    const initialValue = {};

    const reducer = function(accum, inputEl){
        if(formEl){
          accum[inputEl.name] = inputEl.value;
          return accum;  
        }
        
    };
    const result = inputEl.reduce(reducer, initialValue);
    
    console.log(result);
}//end of getShippingInfo()

function setBillingInfo() {
    const shippingInfo = getShippingInfo();
	
	setBillingInputs(shippingInfo);

}//end of setBillingInfo()


function setBillingInputs(shippingInfo) {

    const formEl = document.querySelector('.js-billing-form');
		if (formEl) {
      const inputEl = Array.from(formEl.querySelectorAll('input'));
     

      inputEl.forEach(function(inputEl){
          inputEl.value = shippingInfo[inputEl.name];
      }, {});
      return{}
       
    
      }

}//end of setBillingInputs() 



const checkboxEl = document.getElementById("billAndShip");
checkboxEl.addEventListener('change', setBillingInfo);


/*
1. In getShippingInfo() what is the benefit of putting the inputs and values into an object?
2. In setBillingInputs() I'm trying to set the value of the input in the billing form with the 
   value of the corresponding input in the shipping info form? I'm not understanding the 
   setBillingInputs() and setBillingInfo() functions.
3. When I console.log(result) in the getshippingInfo function it doesn't seem to log the zip code.
   It is there if you expand the object in the console. Is that becasue it's a number and not a string?

*/
