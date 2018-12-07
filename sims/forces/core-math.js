class Expression {
	constructor(/*expr,*/terms){
		//this.expr = expr;
		this.terms = terms;
	}
	simplify() {
		
	}
	factor() {
		var factors = {};
		for(var i = 0; i < this.terms; i++){
			if (factors[this.terms[i].variable]){}
		};
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
class Multiplication extends Operation {
	constructor(factor1,factor2){
		super(factor1,factor2);
		this.factors = [factor1,factor2];
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
	simplify() {
		//First, we should simplify the base and the exponents
		var simplified = new Exponent(this.base.simplify(),this.exponent.simplify())

		//Now we should check if there are variables within any part of the operation
		if (!this.containsVariables){
			return Math.pow(simplified.base.value,simplified.exponent.value);
		}
		return simplified;
	}
	get containsVariables(){
		return this.base.containsVariables || this.exponent.containsVariables
	}
	get value() {
		return this.simplify();
	}
}

class Constant {
	constructor(value /* Number */){
		this.value = value;
		this.containsVariables = false;
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
		this.containsVariables = true;
	}
}

class Variable {
	constructor(name,symbol){
		this.name = name;
		this.symbol = symbol;
		this.containsVariables = true;
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
	constructor(coefficients /*Array of coeffecients, will be multiplied */,variable /* Variable may be an operation or a variable */){
		this.coefficient = 1;
		for (var i = 0; i < coefficients.length; i++) {
			this.coefficient *= coefficients[i];
		}
		this.variable = variable;
		this.containsVariables = (this.variable != undefined);
	}
	getElement() {
		var element = document.createElement("div");
		element.classList.add("math");

		//Add the coefficient's element
		element.appendChild(this.coefficient.getElement());

		//Add the variable(s) || Changed, we're not using this anymore
		/*for (var i = 0; i < this.variables.length; i++){
			element.appendChild(this.variables[i].getElement());
		}*/
		//Add the variable
		element.appendChild(this.variable.getElement());
		
		//Add the coefficient
		element.appendChild(this.coefficient.getElement());
		return element;
	}
}


///Physics
class Unit extends Expression {
	constructor(terms){
		super(terms);
	}
}
		
function isEqual(t0,t1){
	if (
}
