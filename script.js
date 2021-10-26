//Need to make calculator object that inputs a first and second operand aswell as an operator 
//as well has have other functions like regular operations, clearing screen


class Calculator {
	constructor(previousOperandText, currentOperandText){
		this.previousOperandText = previousOperandText
		this.currentOperandText = currentOperandText
		this.clear()
	}

	clear() {
		this.currentOperand = ''
		this.previousOperand = ''
		this.operation = undefined
	}

	appendNumber(num)
	{
		this.currentOperand += (num).toString()
		//this.currentOperand = num
	}
	
	choseOperation(operation)
	{
		this.operation = operation
	}

	changeSign()
	{
		console.log(parseInt(this.currentOperand))
		this.currentOperand = parseInt(this.currentOperand)
		this.currentOperand *= -1
		this.updateDisplay()
	}

	calculate() {
		if (this.operation == undefined){
			return
		}
		this.currentOperand = parseInt(this.currentOperand)
		this.previousOperand = parseInt(this.previousOperand)


		switch (this.operation){
			case "/":
				this.currentOperand = this.previousOperand / this.currentOperand
				this.updateDisplay()
				break;

			case "*":
				this.currentOperand = this.previousOperand * this.currentOperand
				this.updateDisplay()
				break;

			case "-":
				this.currentOperand = this.previousOperand - this.currentOperand
				this.updateDisplay()
				break;

			case "+":
				this.currentOperand = this.previousOperand + this.currentOperand
				this.updateDisplay()
				break;

			case "%":
				this.currentOperand = this.previousOperand % this.currentOperand
				this.updateDisplay()
				break;

		}


	}

	updateDisplay() {
		/**
		console.log(typeof this.currentOperandText.innerText)
		console.log(typeof this.currentOperand)
		**/

		this.currentOperandText.innerText = this.currentOperand
	}
}


//Shows us different properties and methods attached to document object
//console.dir(document);
//console.dir(document.URL);


//assign data attributes to buttons to make selection easier[data-operation, ]
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals')
const clearButton = document.querySelector('[data-clear]')
const currentOperandText = document.querySelector('[data-current-operand]')
const changeSignButton = document.querySelector('[data-change-sign]')


const calculator = new Calculator('', currentOperandText)
console.log('created calculator')

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
		
	})
})


clearButton.addEventListener('click', () => {
	calculator.clear()
	calculator.updateDisplay()
}) 


changeSignButton.addEventListener('click', () => {
	calculator.changeSign()
}) 


operationButtons.forEach(button => {
	button.addEventListener('click', () => {
	console.log('works')
	calculator.operation = button.innerText
	calculator.previousOperand = calculator.currentOperand
	calculator.currentOperand = ''
	calculator.updateDisplay()
	})
})

equalsButtons.addEventListener('click', () => {
	calculator.calculate()
})