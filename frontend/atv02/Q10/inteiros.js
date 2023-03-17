function gerarNumeros() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultado = "";
    
    if (numero1 < numero2) {
      for (let i = numero1 + 1; i < numero2; i++) {
        resultado += i + ", ";
      }
    } else {
      for (let i = numero2 + 1; i < numero1; i++) {
        resultado += i + ", ";
      }
    }
    
    document.getElementById("resultado").innerHTML = "Números no intervalo: " + resultado;
  }