function letterCombinations(input_digit) {

	if(input_digit.length === 0){
		return [];
	}

	const mapping {
		 2: "abc",
		 3: "def",
		 4: "ghi",
		 5: "jkl",
		 6: "mno",
		 7: "pqrs",
		 8: "tuv",
		 9: "wxyz"
	}

	const results = [];

	for(const letter of mapping[input_digit[0]]) {
		results.push(letter);
	}

	for(let i = 1; i < input_digit.length; i++){
		const newResults = [];
		for(const letter of results) {
			for(const letter2 of mapping[input_digit[i]]) {
				newResults.push(letter + letter2);
			}
		}
		results = newResults;
	}

	results.sort();
	return results;

	
 // let map = {
	//  0: "0",
	//  1: "1",
	//  2: "abc",
	//  3: "def",
	//  4: "ghi",
	//  5: "jkl",
	//  6: "mno",
	//  7: "pqrs",
	//  8: "tuv",
	//  9: "wxyz"
 // }

	// let results = [];

	// function solve(input_digit, index, calculatedString) {

	// 	if(index >= seachString.length){
	// 		results.push(calculatedString);
	// 		return;
	// 	}
		
	// 	let currString = map[seachString[index]]
	// 	for(let i = 0; i < currString.length; i++){
	// 		solve(seachString, index+1, calculatedString + currString);
	// 	}
	// }

	// solve(0, "");
}

module.exports = letterCombinations;
