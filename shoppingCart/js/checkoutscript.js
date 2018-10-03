'use strict';

function getShippingInfo() {

    const formEl = document.querySelector('.js-shipping-form');
    
    if (formEl) {
        const inputEls = Array.from(formEl.querySelectorAll('input'));
        console.log(inputEls);
		 const shipInputs = inputEls.reduce((accum, inputEl) => {
            accum[inputEl.name] = inputEl.value;
            return accum;

        }, {});

    }
    return {};
}//end of getShippingInfo()

function setBillingInfo() {
    const shippingInfo = getShippingInfo();
	
	setBillingInputs(shippingInfo);

}//end of setBillingInfo()


function setBillingInputs(shippingInfo) {

    const formEl = document.querySelector('.js-billing-form');
		if (formEl) {

        	const inputEls = Array.from(formEl.querySelectorAll('input'));
        	console.log(inputEls);
        	inputEls.forEach(inputEl => {

            inputEl.value = shippingInfo[inputEl.name]
    }, {})
    return {};
}

}//end of setBillingInputs() 



const checkboxEl = document.getElementById("billAndShip");
checkboxEl.addEventListener('change', setBillingInfo);
