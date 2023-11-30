function Rodape() {
  const exemploEstilos = {
    textAlign: "center",
    backgroundColor: "darkblue",
    color: "white",
    padding: "2%",
    border: "solid 4px cornflowerblue",
  };

  return (
    <>
      {/* Versão direta:
       Utilizamos uma constante com os dados do CSS*/}
      <footer style={exemploEstilos}>
        {/* Versão inline:
       1º par de chaves representa que é um elemento JS e o 2º é do objeto para a tratativa de CSS inline 
      */}
        <h2 style={{ textAlign: "center" }}>@_Tanaka11_ 🥶</h2>
        <p>Fundamentos de React</p>

        {/* Utilizando classes CSS in JS atraves da palavra-chave 'className' */}
        <p>
          Utilizando <b className="sombra">classes</b>
        </p>
      </footer>
    </>
  );
}

export default Rodape;
