document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const password = document.querySelector('#password').value;
  const passwordConfirm = document.querySelector('#confirm-password').value;

  const dados = [
    { name: "ana.silva", password: "123" },
    { name: "joao.mendes", password: "Joao#321" },
    { name: "mariana.lima", password: "Mari@456" },
    { name: "carlos.souza", password: "Carlos!789" }
  ];

  const user = dados.find((u) => u.name === name);

  if (!user) {
    alert('Usuário não encontrado!');
    return;
  }

  if (user.password !== password) {
    alert('Senha incorreta!');
    return;
  }

  if (password !== passwordConfirm) {
    alert('As senhas não conferem!');
    return;
  }
  
  localStorage.setItem('userName', user.name);
  window.location.href = 'src/pages/welcome.html'; // Altere o caminho se necessário
});
