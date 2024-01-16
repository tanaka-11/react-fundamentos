import imagemLoading from "../assets/loading.svg";

function Loading() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={imagemLoading} alt="Carregando..." />
    </div>
  );
}
export default Loading;
