
function letterCombinationsRecur(digits, index, results) {
	if(index === digits.length){
		return results;
	}

	const mapping = {
		2: "abc",
	    3: "def",
	    4: "ghi",
	    5: "jkl",
	    6: "mno",
	    7: "pqrs",
	    8: "tuv",
	    9: "wxyz",
	};

	const letters = mapping[digits[index]];

	for(const letter of letters) {
		results.push(letter);
		letterCombinationsRecur(digits, index+1, results);
		results.pop();
	}

	return results;
}

function letterCombinations(input_digit) {
	return letterCombinationsRecur(input_digit, 0, []);
}

module.exports = letterCombinations;
