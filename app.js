document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    // Função para carregar os usuários
    function loadUsers() {
        fetch('http://localhost:5000/buscar_usuario')
            .then(response => response.json())
            .then(data => {
                userList.innerHTML = ''; // Limpa a lista anterior
                data.forEach(user => {
                    const li = document.createElement('li');
                    li.classList.add('list-group-item');
                    li.innerHTML = `${user.nome} - ${user.email} <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Excluir</button>`;
                    userList.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar usuários:', error);
            });
    }

    // Função para cadastrar um novo usuário
    userForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        fetch('http://localhost:5000/cadastrar_usuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email })
        })
            .then(response => response.json())
            .then(() => {
                loadUsers();  // Recarrega a lista de usuários
                userForm.reset();  // Limpa o formulário
            })
            .catch(error => {
                console.error('Erro ao cadastrar usuário:', error);
            });
    });

    // Função para deletar um usuário
    window.deleteUser = function (id) {
        fetch(`http://localhost:5000/deletar_usuario/${id}`, {
            method: 'DELETE'
        })
            .then(() => loadUsers())
            .catch(error => {
                console.error('Erro ao deletar usuário:', error);
            });
    };

    // Carregar usuários ao iniciar
    loadUsers();
});
