// Importando o componente Menu
import Menu from "./Menu";
import "./Cabecalho.css";

// Criando um componente individual para o cabeçalho
function Cabecalho() {
  return (
    <header>
      <h1>
        Olá React! - <span className="sombra">@_Tanaka11_</span> 🥶
      </h1>
      <hr />
      {/* Importando o componente Menu dentro do componente Cabeçalho*/}
      <Menu />
    </header>
  );
}

// Exportando o componente
export default Cabecalho;
