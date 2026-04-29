# 🔍 GitHub Profile Explorer

Um visualizador moderno de perfis do GitHub que exibe informações completas de qualquer usuário, incluindo avatar, bio, seguidores, repositórios e muito mais — com uma interface escura elegante e responsiva.

<div align="center">
  [![Live Demo](https://img.shields.io/badge/🌐%20Demo%20ao%20Vivo-0A0E17?style=for-the-badge&logo=github&logoColor=white)](https://rfernandes10.github.io/GitHub_Profile_Explorer/)
  [![Licença MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
  <br/>
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![GitHub API](https://img.shields.io/badge/GitHub%20API-181717?style=for-the-badge&logo=github&logoColor=white)](https://developer.github.com/)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
</div>

---

## ✨ Funcionalidades

### 🔎 Busca de Perfis
- **Busca Dinâmica:** Pesquise qualquer usuário do GitHub em tempo real
- **Dados Completos:** Exibição de avatar, nome, bio, localização
- **Estatísticas:** Seguidores, seguindo e repositórios públicos
- **Link Direto:** Acesso rápido ao perfil real no GitHub

### 📂 Repositórios
- **Listagem Completa:** Todos os repositórios públicos do usuário
- **Informações Detalhadas:** Nome, descrição, linguagem utilizada
- **Paginação:** Botão "Ver Mais" para carregar mais repositórios
- **Links Diretos:** Acesso rápido a cada repositório

### 🎨 Interface
- **Dark Mode Elegante:** Tema escuro moderno e agradável
- **Design Responsivo:** Adaptado para desktop, tablet e mobile
- **Animações Suaves:** Transições e efeitos visuais
- **Feedback Visual:** Estados de loading e erro bem definidos

---

## 📸 Screenshots

<div align="center">
  <img src="./public/DevQuest.gif" alt="GitHub Profile Explorer Demo" width="100%" style="border-radius: 10px;"/>
  <br/>
  <em>Demonstração da busca e exibição de perfil</em>
</div>

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Descrição | Uso no Projeto |
|------------|-----------|----------------|
| **HTML5** | Estrutura semântica | Marcação da página |
| **CSS3** | Estilização moderna | Layout responsivo e dark mode |
| **JavaScript (ES6+)** | Linguagem dinâmica | Lógica da aplicação |
| **GitHub API** | API RESTful | Dados em tempo real |
| **Fetch API** | Requisições HTTP | Consumo da API |

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge)
- Editor de código (VS Code recomendado)
- Git

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/RFernandes10/GitHub_Profile_Explorer.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd GitHub_Profile_Explorer
   ```

3. **Abra o arquivo `index.html` no navegador:**
   - Dê duplo clique no arquivo, ou
   - Use uma extensão como "Live Server" no VS Code

### Sobre a API do GitHub

Este projeto consome a **GitHub REST API v3**:
- **Endpoint de Usuário:** `https://api.github.com/users/{username}`
- **Endpoint de Repositórios:** `https://api.github.com/users/{username}/repos`

> **Nota:** Para evitar limites de taxa, considere adicionar um token de acesso pessoal nas requisições.

---

## 📂 Estrutura do Projeto

```
GitHub_Profile_Explorer/
├── public/
│   ├── DevQuest.gif     # Demonstração animada
│   └── index.html      # Página principal
├── src/
│   ├── css/
│   │   └── style.css  # Estilos da aplicação
│   ├── js/
│   │   └── script.js  # Lógica JavaScript
│   └── assets/
│       └── images/    # Imagens do projeto
└── README.md
```

---

## 🎯 Diferenciais

- **Single Page Application:** Sem recarregamento de página
- **Consumo de API Real:** Integração com GitHub em tempo real
- **Tratamento de Erros:** Mensagens amigáveis para usuário não encontrado
- **Código Limpo:** Estruturado e bem comentado
- **Deploy no GitHub Pages:** Demonstração ao vivo disponível

---

## 🌐 Demo ao Vivo

🔗 **Acesse:** [https://rfernandes10.github.io/GitHub_Profile_Explorer/](https://rfernandes10.github.io/GitHub_Profile_Explorer/)

---

## 📫 Contato

<div align="center">
  <a href="https://www.linkedin.com/in/roberto-wolowitz/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:robertofernandes144@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://github.com/RFernandes10">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</div>

---

<div align="center">
  <h3>⭐ Se este projeto foi útil, considere dar uma estrela!</h3>
  <p>Feito com ❤️ e ☕ por <strong>Roberto Fernandes</strong></p>
</div>
