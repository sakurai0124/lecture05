var inputoperandA = document.querySelector("#operand_a");
var inputoperandB = document.querySelector("#operand_b");
var inputOperator = document.querySelector("#operator");
var output = document.querySelector("#output");
var error = document.querySelector("#error");


// 5% 8% で２つの商品の値段を消費税計算、レジのようにその小計を出す。（どちらかに数値を入れなかった場合エラー）



var showError = function(){
	error.setAttribute("class", "");
};

var hideError = function(){
	error.setAttribute("class", "hidden");
};

var showResult = function(result){
	output.value = result + "";
};

var add = function(a, b){
	return a + b;
};

var subtract = function(a, b){
	return a - b;
};

var multiply = function(a, b){
	return a * b;
};

var divide = function(a, b){
	return a / b;
};

var modulus = function(a, b){
	return a % b;
};

var shohizei5 = function(a, b){
	return a * 1.05 + b * 1.05 ;
};

var shohizei8 = function(a, b){
	return a * 1.08 + b * 1.08 ;
};


var isOperator = function(operator){
	return operator == "+" || operator == "-" || operator == "*" ||
	operator == "/" || operator == "%" || operator == "5%" || operator == "8%";
};

var isNumber = function(a){
	return !Number.isNaN(a);
};

var isNonZeroNumber = function(a){
	return isNumber(a) && a != 0;
};

var isInteger = function(a){
	return Number.isInteger(a);
};

var isNaturalNumber = function(a){
	return isInteger(a) && a > 0;
};

var isDivision = function(operator, a, b){
	return operator == "/" && isNumber(a) && isNonZeroNumber(b);
};

var isModulus = function(operator, a, b){
	return operator == "%" && isNaturalNumber(a) && isNaturalNumber(b);
};

var isShohizei5 = function(operator, a, b){
	return operator == "5%" && isNaturalNumber(a) && isNaturalNumber(b);
};
var isShohizei8 = function(operator, a, b){
	return operator == "8%" && isNaturalNumber(a) && isNaturalNumber(b);
};


var isMultiplication = function(operator, a, b){
	return operator == "*" && isNumber(a) && isNumber(b);
};

var isSubtraction = function(operator, a, b){
	return operator == "-" && isNumber(a) && isNumber(b);
};

var isAddition = function(operator, a, b){
	return operator == "+" && isNumber(a) && isNumber(b);
}




var isReady = function(operator, a, b){
	return isDivision(operator, a, b) || isModulus(operator, a, b) ||
	isMultiplication(operator, a, b) || isSubtraction(operator, a, b) || isAddition(operator, a, b) 
|| isShohizei5(operator, a, b) || isShohizei8(operator, a, b);
};

var startCalc = function(){
	var operandA = inputoperandA.value;
	var operandB = inputoperandB.value;
	var operator = inputOperator.value;

	operandA = Number(operandA);
	operandB = Number(operandB);

	hideError();
	if(isReady(operator, operandA, operandB)){
		var result = 0;
		if(operator == "+"){
			result = add(operandA, operandB);
		}else if(operator == "-"){
			result = subtract(operandA, operandB)
		}else if(operator == "*"){
			result = multiply(operandA, operandB);
		}else if(operator == "/"){
			result = divide(operandA, operandB);
		}else if(operator == "%"){
			result = modulus(operandA, operandB);
				}else if(operator == "5%"){
			result = shohizei5(operandA, operandB);
					}else if(operator == "8%"){
			result = shohizei8(operandA, operandB);
			
		}
		showResult(result);
	}else{
		showError();
	}
};

var initApp = function(){
	var calcButton = document.querySelector("#calcButton");

	calcButton.addEventListener("click", startCalc)
};

initApp();
