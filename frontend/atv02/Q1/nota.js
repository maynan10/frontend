function validarNota() {
    let nota = parseFloat(document.getElementById("nota").value);

    while (nota < 0 || nota > 10 || isNaN(nota)) {
      alert("Nota inválida. Digite novamente.");
      nota = parseFloat(document.getElementById("nota").value);
    }

    alert("Nota digitada: " + nota);
  }