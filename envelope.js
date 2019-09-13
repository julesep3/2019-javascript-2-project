const util = require('./util')
const dynamicLine = util.dynamicLine

const from = {
	name: "Zach Mays",
	street: "1234 NW 20th",
	state: "OK",
	city: "OKC",
	zip: "73106"
}

function createEnvelope(to) {
	// from and to object
	// {name, street, city, state, zip}

	// ========================================
	// | Zach Mays                            |
	// | 124 NW 20th                          |
	// | OKC, OK 73106                        |
	// |                                      |
	// |					Name              |
	// |					Address           |
	// |					City, State, Zip  |
	// ========================================

	console.log("========================================")
	console.log(dynamicLine(2, from.name))
	console.log(dynamicLine(2, from.street))
	console.log(dynamicLine(2, `${from.city}, ${from.state}, ${from.zip}`))
	console.log(dynamicLine(2, ""))
	console.log(dynamicLine(11, to.name))
	console.log(dynamicLine(11, to.address.street))
	console.log(dynamicLine(11, `${to.address.city}, ${to.address.state}, ${to.address.zip}`))
	console.log("========================================")
}

function createEnvelopes(promptResponses, userData) {
	
	const filter1 = userData.filter(word => {
		return word.age < promptResponses.ageMax
	})
	
	const filter2 = filter1.filter(word => {
		return word.sex === promptResponses.sex
	})
	
	filter2.forEach(data => {
		createEnvelope(data)
	})
}

module.exports = {
	createEnvelopes
}