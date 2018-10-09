if (formEl) {
        const inputEls = Array.from(formEl.querySelectorAll('input'));
		 const shipInputs = inputEls.reduce((accum, inputEl) => {
            if(!accum[inputEl.name]){
                accum[inputEl.name] = inputEl.value;
            }
                                    //accum[inputEl.name] = inputEl.value;
            return accum;
            console.log(shipInputs);
        }, {});

    }
    return {};






        const inputEl = Array.from(formEl.querySelectorAll('input'));
            //console.log(inputEls);
            inputEl.forEach(inputEl => {

            inputEl.value = shippingInfo[inputEl.name]
    }, {})
    return {};



function getShippingInfo() {

    const formEl = document.querySelector('.js-shipping-form');
    const inputEl = Array.from(formEl.querySelectorAll('input'));
    const initialValue = {};

    function reducer(accum, inputEl){
      if(formEl){
          accum[inputEl.name] = inputEl.value;
          return accum;  
        }
    }

    const result = inputEl.reduce(reducer, initialValue);
    
    console.log(result);
}//end of getShippingInfo()