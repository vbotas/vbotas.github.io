$(document).ready(function() {
	var pantalla = '';
	var num1=00;
	var operacion = 0;

	$('.botonNumero').click(function(){
		if (operacion===0) {
		num1 = parseInt($(this).html());
		pantalla = pantalla + ($(this).html());
		$('#pantalla').text(pantalla);
		numero1=parseInt(pantalla);
		console.log('El numero1 es ' + numero1);
		}
		else {
		num2 = parseInt($(this).html());
		pantalla = pantalla + ($(this).html());
		$('#pantalla').text(pantalla);
		numero2=parseInt(pantalla);
		console.log('El numero2 es ' + numero2);
		}
	})
	$('.botonOperador').click(function() {
		//console.log(numero1);
		operador = $(this).html();
		if (operador === '+') {
			operacion = 1;
		}
		else if (operador === '-') {
			operacion = 2;
		}
		else if (operador === 'x') {
			operacion = 3;
		}
		else if (operador === '/') {
			operacion = 4;
		}
		else if (operador === 'sgn') {
			operacion = 5;
		}
		/*else if (operador === '.') {
			operacion = 6;
		}*/
		else if (operador === 'C') {
			numero1 = 0;
			numero2 = 0;
			num1 = 0;
			num2 = 0;
			operacion = 0;
			pantalla = '';
			$('#pantalla').text('');
		}
		console.log(numero1 + ' ' + operador);
		$('#pantalla').text('');
		pantalla = '';
		//console.log(pantalla);
		console.log('La operacion es ' + operacion);
	})
	$('#igual').click(function() {
		switch (operacion) {
			case 1:
			result = parseFloat(numero1) + parseFloat(numero2);
			$('#pantalla').text(result);
			break;
		case 2:
			result = parseFloat(numero1) - parseFloat(numero2);
			$('#pantalla').text(result);
			break;
		case 3:
			result = parseFloat(numero1) * parseFloat(numero2);
			$('#pantalla').text(result);
			break;
		case 4:
			result = parseFloat(numero1) / parseFloat(numero2);
			$('#pantalla').text(result);
			break;
		case 5:
			result = -numero1;
			$('#pantalla').text(result);
			break;
		}
	})

});
