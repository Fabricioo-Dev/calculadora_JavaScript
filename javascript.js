let formulario = document.querySelector('.form');
let div_resultado = document.querySelector('.resultado_calculadora');
let p_resultado = document.createElement('p');
p_resultado.classList.add('total_formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let numero1 = parseFloat(document.querySelector('.numero1').value);
    let numero2 = parseFloat(document.querySelector('.numero2').value);
    let operador = document.querySelector('.operador').value;
    console.log(operador);
    let resultado;

    switch (operador) {
        case 'sumar':
            resultado = numero1 + numero2;
            break;
        case 'restar':
            resultado = numero1 - numero2;
            break;
        case 'multiplicar':
            resultado = numero1 * numero2;
            break;
        case 'dividir':
            resultado = numero2 !== 0 ? numero1 / numero2 : 'Error, división por cero';
            break;
        default:
            resultado = 'Operación no valida ';
    }
    p_resultado.innerHTML = 'Resultado: <b>' + resultado +'</b>';
    div_resultado.appendChild(p_resultado);

    document.querySelector(".numero1").value = "";
    document.querySelector(".numero2").value = "";
    document.querySelector(".operador").selectedIndex = 0;
});