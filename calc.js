        let valorActual = '';
        let operacionPendiente = '';
        let resultadoAnterior = 0;

        function concatenar(digito) {
            valorActual += digito;
            document.getElementById('resultado').value = valorActual;
        }

        function limpiar() {
            valorActual = '';
            operacionPendiente = '';
            resultadoAnterior = 0;
            document.getElementById('resultado').value = '';
        }

        function operacion(operador) {
            if (valorActual !== '') {
                calcular();
            }
            operacionPendiente = operador;
        }

        function calcular() {
            const valor = parseFloat(valorActual);
            switch (operacionPendiente) {
                case '+':
                    resultadoAnterior += valor;
                    break;
                case '-':
                    resultadoAnterior -= valor;
                    break;
                case '*':
                    resultadoAnterior *= valor;
                    break;
                case '/':
                    resultadoAnterior /= valor;
                    break;
                default:
                    resultadoAnterior = valor;
                    break;
            }
            document.getElementById('resultado').value = resultadoAnterior;
            valorActual = '';
        }