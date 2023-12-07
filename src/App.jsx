// Todos componentes react devem começar com letra maiuscula

// Importação dos componentes
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

// Importação dos componentes dentro do pages
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Container from "./components/Container";

// Vamos utilizar o componente (Fragment <></>) e envolver o return entre parenteses para retornar nosso html.
function App() {
  return (
    <>
      {/* Importando o componente individual envolvido por uma tag */}
      <Cabecalho />

      <Container>
        <Home />
        <Produtos />
        <Contato />
      </Container>

      <Rodape />
    </>
  );
}

export default App;
