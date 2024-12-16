/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

var transactions = [
  { item: "maza", category: "drink", price: 25 },
  { item: "coca cola", category: "drink", price: 20 },
  { item: "piza", category: "food", price: 25 },
  { item: "chat", category: "food", price: 30 },
  { item: "momos", category: "food", price: 50 },
];

function calculateTotalSpentByCategory(transactions) {
  var spendEstimateas = {};

  for (var i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    if (spendEstimateas[t.category]) {
      spendEstimateas[t.category] += t.price; 
    } else {
      spendEstimateas[t.category] = t.price; 
    }
  }

  console.log(spendEstimateas);
}

calculateTotalSpentByCategory(transactions);
