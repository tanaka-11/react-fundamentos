// Todos componentes react devem começar com letra maiuscula

// Importação do componente
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

// Vamos utilizar o componente (Fragment <></>) e envolver o return entre parenteses para retornar nosso html.
function App() {
  return (
    <>
      {/* Importando o componente individual envolvido por uma tag */}
      <Cabecalho />

      <Conteudo />

      <Rodape />
    </>
  );
}

export default App;
