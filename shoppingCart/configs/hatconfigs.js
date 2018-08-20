const hatConfig = [
    {
        name: 'Oakland A\'s',
        price: 10.99,
        img : "../img/AsHat.jpeg",
        alt : "Oakland A's baseball hat",
        id : '1',
        quantity : 0
    },
    {
        name: 'Milwaukee Brewers',
        price: 10.99,
        img : "../img/brewersHat2.jpeg",
        alt : "Milwaukee Brewers baseball hat",
        id : '2',
        quantity : 0
    },
    {
        name : 'Kansas City Chiefs',
        price : 10.99,
        img : "../img/chiefsHat.jpeg",
        alt : "Kansas City Chiefs baseball hat",
        id : '3',
        quantity : 0
    },
    {
        name : 'Grateful Dead',
        price : 10.99,
        img : "../img/deadHat.jpg",
        alt : "Grateful Dead baseball hat",
        id : '4',
        quantity : 0
    },
    {
         name : 'Detroit Tigers',
         price : 10.99,
         img : "../img/detroitHat.jpeg",
         alt : "Detroit Tigers baseball hat",
         id : '5',
         quantity : 0
    },
    {
         name : 'Cleveland Indians',
         price : 10.99,
         img : "../img/indiansHat2.jpeg",
         alt : "Cleveland Inians baseball hat",
         id : '6',
         quantity : 0
    },
    {
         name : 'Seattle Mariners',
         price : 10.99,
         img : "../img/marinersHat.jpeg",
         alt : "Seattle Mariners baseball hat",
         id : '7',
         quantity : 0
    },
    {
         name : 'New York Mets',
         price : 10.99,
         img : "../img/metsHat.jpeg",
         alt : "New York Mets baseball hat",
         id : '8',
         quantity : 0
    },
    {
         name : 'Baltimore Orioles',
         price : 10.99,
         img : "../img/oriolesHat2.jpeg",
         alt : "B'alt'imore Orioles baseball hat",
         id : '9',
         quantity : 0
    },
    {
         name : 'San Diego Padres',
         price : 10.99,
         img : "../img/padresHat.jpeg",
         alt : "San Diego Padres baseball hat",
         id : '10',
         quantity : 0
    },
    {
         name : 'Texas Rangers',
         price : 10.99,
         img : "../img/rangerHat2.jpeg",
         alt : "Texas Rangers baseball hat",
         id : '11',
         quantity : 0
    },
    {
         name : 'Tampa Bay Rays',
         price : 10.99,
         img : "../img/raysHat.jpeg",
         alt : "Tampa Bay Rays baseball hat",
         id : '12',
         quantity : 0
    },
    {
         name : 'Cincinnati Reds',
         price : 10.99,
         img : "../img/redsHat.jpeg",
         alt : "Cincinnati Reds baseball hat",
         id : '13',
         quantity : 0
    },
    {
         name : 'Boston Red Sox',
         price : 10.99,
         img : "../img/redSoxHat2.jpeg",
         alt : "Boston Red Sox baseball hat",
         id : '14',
         quantity : 0
    },
    {
         name : 'Kansas City Royals',
         price : 10.99,
         img : "../img/royalsHat2.jpeg",
         alt : "Kansas City Royals baseball hat",
         id : '15',
         quantity : 0
    }

];



//put hat tiles on the page
function renderMarkup(hatConfig) {
    hatConfig.forEach(function(hat) {
    const wrapperElement = document.querySelector('#hatContainer');
    console.log(wrapperElement);
        wrapperElement.insertAdjacentHTML('afterbegin', `
        	<div class="col">
			<h1>${hat.name}</h1>
			<'img' class="hatimg" src="${hat.img}" 'alt'="${hat.alt}"/>
			<div class="prodSelection">
				<p class="price-js">price: ${hat.price}</p>
				<p>quantity:</p>
				<select data-id="id">
					<option value="0">0</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<input class="btn" type="button" name="add" value="Add to cart" />
				<input class="btn btn--remove" type="button" name="remove" value="Remove" />
			</div><!--end .prodSelection-->
		</div><!--end .col -->
        `)
    })
};

document.addEventListener('change', function(e) {
    // get hat id from e.target.dataset
    let hatID = e.target.dataset;
    //loop through all of our hat objects in our config
    hatConfig.forEach(function(hat){
        if(hat.id == hatID){
            hat.quantity = dataset.id.value;
        }
    });
        // when you find the hat with the id same as hat id from select in step 1 of this function, 
        //update the quantity value with the value of the select

})
 

