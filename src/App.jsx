// Todos componentes react devem começar com letra maiuscula

// Vamos utilizar o componente (Fragment <></>) e envolver o return entre parenteses para retornar nosso html.
function App() {
  return (
    <>
      <header>
        <h1>Olá React! - @_Tanaka11_</h1>
        <hr />
        <nav>
          <a href="#">Home</a>
          <a href="#">Produto</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      {/* Comentário dentro do JSX*/}

      <main>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit?
          Aut dolor culpa illum autem quo adipisci fuga maxime exercitationem,
          ullam ea? Pariatur dolore aperiam architecto vero reiciendis eaque
          commodi!
        </p>

        <article>
          <h3>Artigo 1 - Tanaka</h3>
          <p>Mol breck</p>
        </article>

        <article>
          <h3>Artigo 2 - Bia</h3>
          <p>Pretinha saliente</p>
        </article>

        <article>
          <h3>Artigo 1 - Nando</h3>
          <p>Maromba noia</p>
        </article>
      </main>

      <footer>
        <h2>@_Tanaka11_</h2>
      </footer>
    </>
  );
}

export default App;
