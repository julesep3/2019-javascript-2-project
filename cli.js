const prompts = require('prompts')
const request = require('request-promise-native')
const envelope = require('./envelope')
const letter = require('./letter')

const programToRun = process.argv[2]

if (programToRun === 'envelope') {
	envelopePrompts().then((responses) => {
		request('http://localhost:3000').then(data => {
			envelope.createEnvelopes(responses, JSON.parse(data))
		})
	})
} else if (programToRun === 'letter') {
	letterPrompts().then((responses) => {
		request('http://localhost:3000').then(data => {
			letter.createLetters(responses, JSON.parse(data))
		})
	})
} else {
	console.log('That is not a program yet!')
	console.log('Please enter in this format\n')
	console.log('"node cli.js " followed by either "envelope" or "letter"')
}

function envelopePrompts() {
	const questions = [
		{
			type: 'number',
			name: 'ageMax',
			message: 'What is the maximum age?'
		},
		{
			type: 'text',
			name: 'sex',
			message: 'What sex demographic?'
		}
	];

	return prompts(questions)
}

function letterPrompts() {
	const questions = [
		{
			type: 'number',
			name: 'ageMax',
			message: 'What is the maximum age?'
		},
		{
			type: 'text',
			name: 'sex',
			message: 'What sex demographic?'
		}
	];

	return prompts(questions)
}