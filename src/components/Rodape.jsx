function Rodape() {
  const exemploEstilos = {
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
        <p className="destaque-texto centralizar">Fundamentos de React</p>
      </footer>
    </>
  );
}

export default Rodape;
