// import Hamburguer from './assets/img/'
import './style.css'
export function Produto({caminho, tipo, titulo, preco}) {
  return(
    <a className="produto">
      <div className="imagem_hamburguer">
        <img id="podrao" src={caminho} alt="texas burguer" />
      </div>
      <div className="descricao_hamburguer">
      <span>{tipo}</span>
      <h1>{titulo}</h1>
      <h2>{preco}</h2>
      </div>
    </a>
  )
}