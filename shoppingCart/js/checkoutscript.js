'use strict';

function copyShipAddress(){
	let shipfname = (document.getElementById('Shipfname').value);
	let billfname = document.getElementById('billfname');
	let checkbox = document.getElementById('billAndShip');

	console.log(shipfname);
	console.log(billfname);
	console.log(checkbox);


	if(checkbox.checked){
		billfname.innerHTML = Shipfname;
	}
}
copyShipAddress();