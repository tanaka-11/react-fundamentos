import Artigo from "../Artigo";
import estilos from "./Conteudo.module.css";

function Conteudo() {
  return (
    <main className={estilos.formataConteudo}>
      <h2>Conteúdo da aplicação</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit? Aut
        dolor culpa illum autem quo adipisci fuga maxime exercitationem, ullam
        ea? Pariatur dolore aperiam architecto vero reiciendis eaque commodi!
      </p>

      {/* Reaproveitamento de componentes */}
      <Artigo />

      <Artigo />

      <Artigo />
    </main>
  );
}

export default Conteudo;
