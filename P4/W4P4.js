// JavaScript source code
//variables 
var numOfItems;
var shipCharge;
var firstItemRate = 10.95;
var subItemsRate = 2.95;

//prompts user to enter amount of items
//converts input to int and assigns it to numOfItems
var numOfItems = parseInt(prompt("Please enter how many items you are ordering: "));

function shippingCharge(numOfItems) {
	if (numOfItems == 1) {

		shipCharge = (numOfItems * firstItemRate);
		//Rounds shipcharge to 2 places 
		shipCharge = shipCharge.toFixed(2);
	}
	else {
		shipCharge = (1 * firstItemRate) + (numOfItems - 1) * subItemsRate;
		//Rounds shipcharge to 2 places
		shipCharge = shipCharge.toFixed(2);
	}
	return shipCharge;
}
console.log("Shipping charge = R" + shippingCharge(numOfItems));