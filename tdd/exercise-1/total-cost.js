// In a TDD-style, write a function which given a basket array, calculates and returns the total cost.
//      The basket array is an array of objects, where each object contains a productId and an amount (and nothing else).

const stockRoom = [
	{
		productId: 10001,
		name: "T-shirt",
		price: 19.99,
        quantity: 20
	},
	{
		productId: 10002,
		name: "Hoodie",
		price: 29.99,
        quantity: 0
	},
    {
		productId: 10003,
		name: "Trousers",
		price: 24.99,
        quantity: 10
	},
    {
		productId: 10003,
		name: "Skirt",
		price: 24.99,
        quantity: 15
	}
]

function calculateTotalCost(basket) {
	return 0
}

module.exports = calculateTotalCost;