function Menu() {
  const alinhaMenu = {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#4687c8",
  };

  return (
    <nav style={alinhaMenu}>
      <a href="#">Home</a>
      <br />
      <a href="#">Produto</a>
      <br />
      <a href="#">Contato</a>
    </nav>
  );
}

export default Menu;
