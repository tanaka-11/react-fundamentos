// Todos componentes react devem começar com letra maiuscula

// Importação dos componentes
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";

// Importação dos componentes dentro do pages
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Container from "./components/Container";

// Importação de componentes do React Route
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Vamos utilizar o componente (Fragment <></>) e envolver o return entre parenteses para retornar nosso html.
function App() {
  return (
    <>
      {/* Envolvendo todas tags com BrowserRouter*/}
      <BrowserRouter>
        <Cabecalho />

        {/* Container com Children e Routes com configuração de rotas */}
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Produtos} path="/produtos" />
            <Route Component={Contato} path="/contato" />
          </Routes>
        </Container>

        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
