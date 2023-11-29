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
        <h2>Salve</h2>
      </main>
    </>
  );
}

export default App;
