var titulo = document.querySelector(".titulo");

titulo.textContent = "Nutrição";

var pacientes = document.querySelectorAll(".paciente");


for (var i=0; i< pacientes.length; i++){

	paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");

	var tdImc = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var alturaValida = validaAltura(altura);
	var pesoValido = validaPeso(peso);

	if (!pesoValido) {
		console.log("peso invalido!");
		tdPeso.textContent = "Peso Invalido!";
		pesoValido = false;
		paciente.classList.add("paciente-invalido")
	}

	if (!alturaValida) {
		console.log("altura invalida!");
		tdAltura.textContent = "Altura Invalida!"
		alturaValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if (alturaValida && pesoValido) {
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;
	}else{
		tdImc.textContent = "Altura e/ou peso invalidos!"
	}  
}

function calculaImc(peso, altura){
	var imc = 0;

	var imc = peso/(altura * altura);

	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso >0 && peso <1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if (altura >0 && altura <3.00){
		return true;
	}else{
		return false;
	}
}