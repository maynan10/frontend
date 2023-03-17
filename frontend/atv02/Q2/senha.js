function validarSenha() {
    let nomeUsuario = document.getElementById("nomeUsuario").value;
    let senha = document.getElementById("senha").value;

    while (senha === nomeUsuario) {
      alert("A senha não pode ser igual ao nome do usuário. Digite novamente.");
      senha = document.getElementById("senha").value;
    }

    alert("Usuário: " + nomeUsuario + "\nSenha: " + senha);
  }