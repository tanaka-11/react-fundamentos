import Artigo from "./Artigo";

function Conteudo() {
  return (
    <main>
      <h2>Conteúdo da aplicação</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odit? Aut
        dolor culpa illum autem quo adipisci fuga maxime exercitationem, ullam
        ea? Pariatur dolore aperiam architecto vero reiciendis eaque commodi!
      </p>

      {/* Reaproveitamento de componentes 
      
      Artigo 1 */}
      <Artigo />

      {/* Artigo 2 */}
      <Artigo />

      {/* Artigo 3 */}
      <Artigo />
    </main>
  );
}

export default Conteudo;
