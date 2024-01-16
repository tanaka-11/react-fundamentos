import { useParams } from "react-router-dom";

function DetalhesProduto() {
  // Usando o hook "useParams" com o parametro que foi passado na rota dinamica.
  const { id } = useParams();

  return (
    <article>
      <h2>Titulo</h2>

      <p>
        <b>Categoria:</b>
      </p>

      <p>
        <b>Preço:</b>
      </p>

      <p>Descrição</p>

      <img src="" alt="" />
    </article>
  );
}

export default DetalhesProduto;
