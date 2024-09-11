# Frontend de Gerenciamento de Usuários

Este é o frontend de uma aplicação de gerenciamento de usuários, onde é possível cadastrar, listar e deletar usuários. Ele interage diretamente com a API desenvolvida em Flask.

## 1. Configuração

### Requisitos:
- Um navegador moderno (Google Chrome, Firefox, etc).
- O backend precisa estar rodando para que o frontend possa se comunicar com ele.

### Passos:

1. Clone o repositório do frontend:
   ```bash
   git clone <URL_DO_REPOSITORIO_FRONTEND>
   cd <PASTA_DO_REPOSITORIO_FRONTEND>
   ```

2. Abra o arquivo `index.html` diretamente no navegador. Não é necessário nenhum servidor local ou dependências externas.

## 2. Interagindo com o Backend

O frontend faz requisições à API do backend que deve estar rodando localmente em `http://localhost:5000`.

- **Cadastrar Usuário**: Insira o nome e email no formulário e clique em "Cadastrar Usuário".
- **Listar Usuários**: A lista de usuários será carregada automaticamente ao abrir a página.
- **Excluir Usuário**: Clique no botão "Excluir" ao lado do usuário para removê-lo da lista.

## 3. Backend

O backend deve estar configurado e rodando. Se precisar de instruções sobre como configurar e rodar o backend, acesse o [README do backend](../backend/README.md).

## 4. Estrutura do Projeto

```
frontend/
│
├── index.html               # Página principal do frontend
├── style.css                # Estilos customizados
├── app.js                   # Lógica para interação com a API
├── README.md                # Instruções do frontend
```

---

Certifique-se de que o backend está rodando em `http://localhost:5000` para que o frontend funcione corretamente. Caso tenha dúvidas ou problemas, entre em contato!


* [URL Repositorio backend](https://github.com/fgfrigo/MVP_Backend)

@ffrigo 2024 #MVP_FrontEnd

