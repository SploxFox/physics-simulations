class Expression {
	constructor(expr,terms){
		this.expr = expr;
		this.terms = terms;
	}
	simplify() {
		
	}
}
class Par extends Expression {
	
}
class Operation {
	constructor(first,second){
		this.first = first;
		this.second = second;
	}
}

class Exponent extends Operation {
	constructor(base,exponent){
		super(base,exponent);
		this.base = base;
		this.exponent = exponent;
	}
	getElement() {
		//Get the elements of the two components
		var baseElement = this.base.getElement();
		var expoValueElement = this.exponent.getElement();
		
		//Create the superscript exponent with its value inside
		var expoElement = document.createElement("sup");
		expoElement.appendChild(expoValueElement);
		
		//Put those all in a new element
		var element = document.createElement("div");
		element.classList.add("math");
		element.appendChild(baseElement);
		element.appendChild(expoElement);
		
		return element;
	}
}
	
class Constant {
	constructor(value /* Number */){
		this.value = value;
	}
	getElement() {
		var element = document.createElement("span");
		element.textContent = this.value;
		element.classList.add("math");
		return element;
	}
}

class Symbol {
	constructor(letter,subscript){
		this.letter = letter;
		this.subscript = subscript;
	}
}

class Variable {
	constructor(name,symbol){
		this.name = name;
		this.symbol = symbol;
	}
	getElement() {
		var element = document.createElement("span");
		element.textContent = this.symbol.letter;
		
		//Subscript stuff, like for F
		//                            net
		if (this.symbol.subscript != undefined) {
			var sub = document.createElement("sub");
			sub.textContent = this.symbol.subscript;
			element.appendChild(sub);
		}
		element.classList.add("math");
		element.dataset.hover = this.name;
		return element;
	}
}

class Term{
	constructor(coefficients,variables /* Both are arrays */){
		this.coefficient = 1;
		for (var i = 0; i < coefficients.length; i++) {
			this.coefficient *= coefficients[i];
		}
		this.variables = variables;
	}
	getElement() {
		var element = document.createElement("div");
		element.classList.add("math");
		
		//Add the coefficient's element
		element.appendChild(this.coefficient.getElement());
		
		//Add the variable(s)
		for (var i = 0; i < this.variables.length; i++){
			element.appendChild(this.variables[i].getElement());
		}
		
		return element;
	}
}