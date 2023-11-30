// Importando o componente Menu
import Menu from "./Menu";

// Importação do módulo CSS como um objeto chamado 'estilos'
import estilos from "./Cabecalho.module.css";

// Criando um componente individual para o cabeçalho
function Cabecalho() {
  return (
    <header>
      <h1>
        <span className={estilos["destaque-texto"]}>Olá</span> React!
        <span className={estilos.sombra}>@_Tanaka11_</span> 🥶
      </h1>
      <hr />

      <p className={`${estilos["destaque-texto"]} centralizar`}>
        Classes CSS combinadas
      </p>

      {/* Importando o componente Menu dentro do componente Cabeçalho*/}
      <Menu />
    </header>
  );
}

// Exportando o componente
export default Cabecalho;
