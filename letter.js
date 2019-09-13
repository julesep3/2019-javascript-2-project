const util = require('./util')
const dynamicLine = util.dynamicLine
const moment = require('moment')

const sale_end_date = moment().add(7, 'days').calendar()

function createLetter(to) {
    
	console.log("========================================")
	console.log(dynamicLine(0, ""))
	console.log(dynamicLine( 3, "Hello " + to.name + ","))
	console.log(dynamicLine(0, ""))
	console.log(dynamicLine(1, "Have you been window-shopping"))
	console.log(dynamicLine(1,  "outfits for your cat(s)?"))
	console.log(dynamicLine(0, ""))
	console.log(dynamicLine(1, "From now until " + sale_end_date + ","))
	console.log(dynamicLine(1, "we are having a 50% off Sale on"))
	console.log(dynamicLine(1, "mini cat top-hats and tux-jackets!!!"))
	console.log(dynamicLine(0, ""))
	console.log(dynamicLine(1, "Don't wait,"))
	console.log(dynamicLine(8, "while supplies last!"))
	console.log(dynamicLine(0, ""))
	console.log(dynamicLine(1, "- From your friends"))
	console.log(dynamicLine(6, "at kittycloset.com"))
	console.log(dynamicLine(0, ""))
	console.log("========================================")

}

function createLetters(promptResponses, userData) {
	
	const filter1 = userData.filter(word => {
		return word.age < promptResponses.ageMax
	})
	
	const filter2 = filter1.filter(word => {
		return word.sex === promptResponses.sex
	})
	
	filter2.forEach(data => {
		createLetter(data)
	})
}

module.exports = {
	createLetters
}