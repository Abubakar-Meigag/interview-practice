const calculateTotalCost = require("./total-cost")

test("calculate total cost", () => {
	expect(calculateTotalCost()).toBe(1)
})
