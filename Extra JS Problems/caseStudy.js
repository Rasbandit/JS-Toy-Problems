// A case study for string manipulation.
// In programing we have diffrent nameing schemes called cases.
// Each case has a specific way of being written and diffrent use cases.
// camalCase - no spaces words all exept the first word are capitalized (this is the default for Javascript).
// snake_case - all lower case, words are seperated by an underscore.
// kabab-case - all lower case, words are seperated by a dash.
// the problem is to create a function that takes in a string and converts it into an object that has properties
//	for each of these cases as well as the original with the value being the string converted into that case.
// eg. caseConverter("Hey guys") => {
//	camalCase: "heyGuys",
//	snakeCase: "hey_guys",
//	kababCase: "hey-guys",
//	original: "Hey Guys"
//}


// To todd: this is optional to tone down the difficulty if the structure is wierd
function caseConverter(string) {
	let camalCase;
	let camalCase;
	let camalCase;
	return {
		camalCase,
		snakeCase,
		kababCase,
		original: string
	}
}


// Challange mode - Use the .replace string method and regex
// (regular expressions) for each case to handle some of the changes.