function salvarCadastro() {
    const form = document.getElementById('cadastroForm');
    const dados = {
      placa: form.placa.value,
      proprietario: form.proprietario.value,
      apartamento: form.apartamento.value,
      bloco: form.bloco.value,
      modelo: form.modelo.value,
      cor: form.cor.value,
      vaga: form.vaga.value
    };

    console.log('Dados cadastrados:', dados);
    alert('Cadastro realizado com sucesso!');

    form.reset();  
  }