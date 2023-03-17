function encontrarMaiorNumero() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let numero3 = parseFloat(document.getElementById("numero3").value);
    let numero4 = parseFloat(document.getElementById("numero4").value);
    let numero5 = parseFloat(document.getElementById("numero5").value);

    // Inicializa a variável maiorNumero com o valor do primeiro número
    let maiorNumero = numero1;

    // Compara cada número com o valor da variável maiorNumero
    if (numero2 > maiorNumero) {
      maiorNumero = numero2;
    }
    if (numero3 > maiorNumero) {
      maiorNumero = numero3;
    }
    if (numero4 > maiorNumero) {
      maiorNumero = numero4;
    }
    if (numero5 > maiorNumero) {
      maiorNumero = numero5;
    }

    document.getElementById("resultado").innerHTML = maiorNumero;
  }