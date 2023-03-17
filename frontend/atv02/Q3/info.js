function validarInformacoes() {
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let salario = parseFloat(document.getElementById("salario").value);
    let sexo = document.getElementById("sexo").value;
    let estadoCivil = document.getElementById("estadoCivil").value;

    if (nome.length <= 3) {
      alert("O nome deve conter mais de 3 caracteres.");
      return;
    }

    if (idade < 0 || idade > 150) {
      alert("A idade deve estar entre 0 e 150 anos.");
      return;
    }

    if (salario <= 0) {
      alert("O salário deve ser maior que zero.");
      return;
    }

    if (sexo !== "f" && sexo !== "m") {
      alert("O sexo deve ser 'f' ou 'm'.");
      return;
    }

    if (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
      alert("O estado civil deve ser 's', 'c', 'v' ou 'd'.");
      return;
    }

    alert("As informações foram validadas com sucesso.");
  }