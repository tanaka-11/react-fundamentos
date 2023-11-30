// Importando o componente Menu
import Menu from "./Menu";

// Criando um componente individual para o cabeçalho
function Cabecalho() {
  return (
    <header>
      <h1>Olá React! - @_Tanaka11_ 🥶</h1>
      <hr />
      {/* Importando o componente Menu dentro do componente Cabeçalho*/}
      <Menu />
    </header>
  );
}

// Exportando o componente
export default Cabecalho;
