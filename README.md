# Fundamentos de React

## Branch: 04-estilização-react

#### CSS in JS

- **Utilizando CSS inline com JS** - Aplicado via atributo style da tag usando sintaxe JS, ou seja, um objeto com propriedades.

- **Utilizando CSS externo e global** - Fazemos a importação na main.jsx com a seguinte sintaxe `import "./seuArquivo.css";`.

- **Utilizando Module CSS** - Criar o arquivo `seuArquivo.module.css`, importar com a sintaxe `import nomeQualquer from "./Cabecalho.module.css";` e trata-lo como um objeto com a sintaxe `<span className={estilos.sombra}>`. Esse tipo de CSS só funciona com classes.

#### Sobre as classes CSS in JS

- Para classes com nome simples passamos com a sintaxe `<span className={estilos.sombra}>`, já para nomes compostos temos que usar a sintaxe `<span className={estilos["destaque-texto"]}>`.

- Combinar classes com Module CSS precisamos passar os atributos com a sintaxe de template string. (Exemplo no Cabecalho.jsx).
