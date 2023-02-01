# Preparação e deploy de aplicação React com Vite

## Criando aplicação a partir de repositório remoto

Crie um repositório remoto sem os arquivos README.md e .gitignore. Você não deve ter nenhum arquivo no repositório além da pasta .git, caso contrário a criação do app Vite será cancelada.

Após criar o repositório remoto, clone-o para sua máquina, acesse o repositório com um terminal e para criar um projeto Vite diretamente no repositório digite o seguinte comando:
`npm create vite@latest .`

Após a criação do projeto, para baixar as dependências da pasta node_modules digite:
`npm install`

Para executar sua aplicação, digite: 
`npm run dev`

Um endereço será exibido no terminal, clique neste endereço segurando `Ctrl` para abrir o projeto em um navegador.

## Deploy no Github Pages

Adicione ao **`vite.config.js`** a propriedade `base` seguida do nome do repositório remoto:

```javascript
export default defineConfig({
  base: '/nome-do-repositorio/',
  plugins: [react()]
})
```

Instale o módulo gh-pages:
`npm install gh-pages -–save-dev`

Adicione no **`package.json`** dentro de `"scripts"`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Concluídos estes passos, digite `npm run deploy` no terminal para publicar a aplicação no Github Pages.

Para cada novo `git push` que você fizer em seu projeto execute um novo `npm run deploy` para publicar as alterações.