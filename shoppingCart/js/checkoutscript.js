'use strict';
//This function gets the inputs and their values from the shipping form 
//and reduces them into an object
function getShippingInfo() {
    //get reference to the shipping form
    const formEl = document.querySelector('.js-shipping-form');
    //create an array from shipping form inputs
    const inputEl = Array.from(formEl.querySelectorAll('input'));
    //define an empty object to store key/value pairs from form 
    let shippingInfo = {};
    
    //function to set the input name = to its value
    function reducer(accum, inputEl){
      if(formEl){
          accum[inputEl.name] = inputEl.value;
          return accum;  
        }
    }
    
    //call reduce to put the key/value pairs into my empty object 'shippingInfo'
    const result = inputEl.reduce(reducer, shippingInfo);
    return shippingInfo; //return the object so it can be used by other functions. 
    
}//end of getShippingInfo()

function setBillingInfo() {
    const shippingInfo = getShippingInfo();
	
  if(checkboxEl.checked){
	  setBillingInputs(shippingInfo);
  }else{
    removeBillingInfo();
  }

}//end of setBillingInfo()

function removeBillingInfo(){
  //get a reference to the billing form
    const formEl = document.querySelector('.js-billing-form');
    if (formEl) {
      //create an array from the billing form inputs
      const inputEl = Array.from(formEl.querySelectorAll('input'));
     
      //loop through array with forEach to assign the BILLING input value to = an empty string
      inputEl.forEach(function(inputEl){
          
          inputEl.value = " ";
      });
      inputEl[0].focus();
    }
}//end of removeBillingInfo()

function setBillingInputs(shippingInfo) {
    
    //get a reference to the billing form
    const formEl = document.querySelector('.js-billing-form');
		if (formEl) {
      //create an array from the billing form inputs
      const inputEl = Array.from(formEl.querySelectorAll('input'));
     
      //loop through array with forEach to assign the BILLING input value to = the SHIPPING
      //input of the same name.
      inputEl.forEach(function(inputEl){
          
          inputEl.value = shippingInfo[inputEl.name];
      });
    }

}//end of setBillingInputs() 



const checkboxEl = document.getElementById("billAndShip");
checkboxEl.addEventListener('change', setBillingInfo);
