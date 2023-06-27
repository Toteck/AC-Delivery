// import Hamburguer from './assets/img/'
import "./style.css";

export function Produto({ promocao, caminho, tipo, titulo, preco }) {
  return (
    <a className="produto">
      <div className="imagem_hamburguer">
        {promocao ? <span id="promocao">Promoção</span> : null}
        <img id="podrao" src={caminho} alt="texas burguer" />
      </div>
      <div className="descricao_hamburguer">
        <span className="tipo">{tipo}</span>
        <h1 className="titulo">{titulo}</h1>
        <h2 className="preco">R$ {preco}</h2>
      </div>
    </a>
  );
}
