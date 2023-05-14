function letterCombinations(input_digit) {
 let map = {
	 0: "0",
	 1: "1",
	 2: "abc",
	 3: "def",
	 4: "ghi",
	 5: "jkl",
	 6: "mno",
	 7: "pqrs",
	 8: "tuv",
	 9: "wxyz"
 }

	let results = [];

	function solve(input_digit, index, calculatedString) {

		if(index >= seachString.length){
			results.push(calculatedString);
			return;
		}
		
		let currString = map[seachString[index]]
		for(let i = 0; i < currString.length; i++){
			solve(seachString, index+1, calculatedString + currString);
		}
	}

	solve(0, "");
}

module.exports = letterCombinations;
