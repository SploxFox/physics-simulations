class BasicUnit {
	constructor(name,abbr,multiplier,namePlural){
		this.name = name;
		this.namePlural = namePlural;
		if (this.namePlural == undefined){
			this.namePlural = this.name + "s";
		}
		this.abbr = abbr;
		this.multiplier = multiplier;
	}
	
}
class Unit{
	constructor(){
		
	}
}
class Magnitude{
	constructor(value,unit){
		checkType(value,"number","Magnitude");
		
	}
}

function checkType(variable,type,variableName) {
	if (typeof variable != type) {
		throw "The value of " + variableName + " must be of type " + type;
	}
}

const m = new BasicUnit("meter","m",1);
const s = new BasicUnit("second","s",1);
class Entity {
	constructor(mass){
		this.mass = mass;
	}
}