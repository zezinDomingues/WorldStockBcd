const adminCredentials = { Nome: "Jose", Gmail: "otiliojose227@gmail.com", senha: "123456" };
const userCredentials = { Nome: "Victor", Gmail: "Victorbarreto@gmail.com", senha: "123456" };

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome === adminCredentials.Nome && email === adminCredentials.Gmail && senha === adminCredentials.senha) {
        window.location.href = 'bc.html';  // Redireciona para a página do administrador
    } else if (nome === userCredentials.Nome && email === userCredentials.Gmail && senha === userCredentials.senha) {
        window.location.href = 'user.html';  // Redireciona para a página do usuário
    } else {
        alert('Nome, email ou senha incorretos!');  // Mensagem de erro
    }
});
