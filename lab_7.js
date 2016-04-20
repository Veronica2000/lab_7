

var total = 0;

var groceries = [
	{
	name: "banana",
	price: 1
	},
	{
	name: "spinach",
	price: 3
	},
	{
	name: "Lucky Charms",
	price: 4
	},
	{
	name: "carrots",
	price: 1
	},
	{
	name: "Friskies",
	price: 8
	},
	{
	name: "shredded cheddar",
	price: 2
	}
];


  
groceries.forEach(function(el){
console.log(el.name + " price: $" + el.price);
});

groceries.forEach(function(el) {
  (total = el.price += total);
});

console.log("Total: $" + total);



