let x = 0;
let y = "";
let operador = "";
let result = 0;
let contNum = 0;
let contOp = 0;
let texto = "";

function addNum(numero) {
	texto = document.getElementById("campo").innerHTML;
	
	if(texto.length < 15) {
		if(contNum == 0) {
    			if(contOp == 0) {
    				document.getElementById("campo").innerHTML = numero;
					texto = document.getElementById("campo").innerHTML;
        			x = Number(texto.replace(",","."));
        			contNum = 1;
					operador = "";
        		} else {
        			document.getElementById("campo").innerHTML = numero;
					texto = document.getElementById("campo").innerHTML;
        			y = Number(texto.replace(",","."));
            		contNum = 1;
        		}
		}else {
			if(contOp == 0) {
				if(texto == "0") {
					document.getElementById("campo").innerHTML = numero;
					texto = document.getElementById("campo").innerHTML;
					x = Number(texto.replace(",","."));
				} else {
					document.getElementById("campo").innerHTML += numero;
					texto = document.getElementById("campo").innerHTML;
					x = Number(texto.replace(",","."));
				}
				
			} else {
				if(texto == "0") {
					document.getElementById("campo").innerHTML = numero;
					texto = document.getElementById("campo").innerHTML;
					y = Number(texto.replace(",","."));
				} else {
					document.getElementById("campo").innerHTML += numero;
					texto = document.getElementById("campo").innerHTML;
					y = Number(texto.replace(",","."));
				}
			}
		}   
	} else {
		alert("Não é possível inserir mais de 15 digitos.");
	}
}

function addVirgula() {
	texto = document.getElementById("campo").innerHTML;

	if(!texto.includes(",")) {
		if(contNum == 0) {
			document.getElementById("campo").innerHTML = "0,";
		} else {
			document.getElementById("campo").innerHTML += ",";
		}
		
		contNum = 1;
	}
}

function addOperador(op) {
	if(contOp == 0) {
		contOp = 1;
		contNum = 0;
		
	} else {
		if(contNum > 0) {
			calcResult();
			y = result;
			contOp = 0;
		}
	}
	
	operador = op;
}

function calcResult() {
	if(y !== "") {
		switch (operador) {
			case "+":
				result = x + y;
				break;
			case "-":
				result = x - y;
				break;
			case "*":
				result = x * y;
				break;
			case "/":
				if(y == 0) {
					alert("Não é possível dividir por zero.");
				} else {
					result = x / y;
				}
				break;
		}
		
		texto = result + "";
		document.getElementById("campo").innerHTML = texto.replace(".",",");
		x = result;
		contNum = 0;
		contOp = 0;
		
	} else {
		y = x;
		calcResult();
	}
    
}

function apagarDigito() {
	texto = document.getElementById("campo").innerHTML;
	
	if(contOp == 0) {
		if(texto.length == 1) {
			document.getElementById("campo").innerHTML = 0;
			texto = document.getElementById("campo").innerHTML;
			x = Number(texto.replace(",","."));
			contNum = 0;
		} else {
			document.getElementById("campo").innerHTML = texto.slice(0, (texto.length - 1));
			texto = document.getElementById("campo").innerHTML;
			x = Number(texto.replace(",","."));
			contNum = 1;
		}
	} else {
		if(texto.length == 1) {
			document.getElementById("campo").innerHTML = 0;
			texto = document.getElementById("campo").innerHTML;
			y = Number(texto.replace(",","."));
			contNum = 0;
		} else {
			document.getElementById("campo").innerHTML = texto.slice(0, (texto.length - 1));
			texto = document.getElementById("campo").innerHTML;
			y = Number(texto.replace(",","."));
			contNum = 1;
		}
	}
}

function limparTudo() {
	document.getElementById("campo").innerHTML = 0;
	x = 0;
	y = "";
	operador = "";
	result = 0;
	contNum = 0;
	contOp = 0;
}

function limparCampo() {
	if(contOp == 0) {
		document.getElementById("campo").innerHTML = 0;
		x = 0;
		contNum = 0;
	} else {
		document.getElementById("campo").innerHTML = 0;
		y = 0;
		contNum = 0;
	}
}
