// Verificar informações de login no LocalStorage
var storedEmail = 'l.soares.2008@gmail.com';
var storedSenha = 'aazzssxx123';

// Obter referência ao formulário de login
var form = document.getElementById('login-form');

// Adicionar um manipulador de eventos de envio ao formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obter valores dos campos de e-mail e senha
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  // Verificar se o e-mail e a senha coincidem
  if (email === storedEmail && senha === storedSenha) {
    // Autenticação bem-sucedida
    // Direcionar para a página inicial ou exibir uma mensagem de sucesso
    window.location.href = 'painel.html';
  } else {
    // Autenticação falhada
    // Exibir uma mensagem de erro
    alert('E-mail ou senha inválidos. Tente novamente.');
  }
});
