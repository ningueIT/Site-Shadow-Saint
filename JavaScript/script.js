document.getElementById('sugestaoForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obter os valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var sugestao = document.getElementById('sugestao').value;

  // Criar um novo elemento de sugestão
  var novaSugestao = document.createElement('div');
  novaSugestao.innerHTML = '<h3>' + nome + '</h3>' +
    '<p>Email: ' + email + '</p>' +
    '<p>Sugestão: ' + sugestao + '</p>';

  // Adicionar a nova sugestão ao elemento de sugestões recebidas
  var sugestoesRecebidas = document.getElementById('sugestoesRecebidas');
  sugestoesRecebidas.appendChild(novaSugestao);

  // Limpar os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('sugestao').value = '';
});