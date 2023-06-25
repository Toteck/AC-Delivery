import './App.css'
import {Button} from './components/Button'
import Logos from "./Logos/AC.png"
import {Produto} from "./components/Produto"



export default function App() {
  return (
    <div className='container'>
      <header>
        <img id="AC" src= {Logos} alt="Logo do site"/>
        <div id="Menu"> 
          <h1>Início</h1>
          <h1>Burgers</h1>
          <h1>Serviços</h1>
          <h1>Contato</h1>
        </div>
        <Button>Fazer Login</Button>
      </header>
      <div className='menu-side'>
      <div id='menu-left'>
        <h2>😋  Perde tempo não!</h2>
        <h1>O Hamburguer<br/> mais delicioso<br/> da Sua Cidade</h1>
        <h3>É um fato estabelecido há muito tempo que um<br/>leitor se distrairá com o conteúdo legível de uma<br/>página ao olhar para seu layout.</h3>
        <Button>Fazer Pedido</Button>
      </div>
      <div className='menu-right'>
        <h1>Menu direita</h1>
      </div>
      </div>
      <div className="menu-search">
        <div className='menu-search-left'>
          <h1 id="title-search">Pesquise o seu<br/>Hamburguer favorito!</h1>
          <div className="container-search">
            <a id="icon-search">
              <img className="icon-search" src='src/assets/img/frame-1.svg'></img>
            </a>
            <input type="search" placeholder="Digite o nome do Burguer"></input>
          </div>
        </div>
        <div className='menu-search-right'>
          <div className="container-tipo">
          <label for="tipo-hamburguer"></label>
          <select id="tipo-hamburguer" name="tipo-hamburguer">
            <option value="tradicional">Todos os Hamburgueres</option>
            <option value="tradicional">Tradicional</option>
          </select> 
          </div>
        </div>
      </div>
      <footer>
        
        <Produto promocao={true} caminho={'src/assets/img/card-burger-1-1.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"}/>
        <Produto promocao={false} caminho={'src/assets/img/card-burger-2-3.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"}/>
        <Produto promocao={false} caminho={'src/assets/img/card-burger-3-1.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"}/>
        <Produto promocao={false} caminho={'src/assets/img/card-burger-4-1.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"}/>
        <Produto promocao={false} caminho={'src/assets/img/card-burger-1-2.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"}/>
        <Produto promocao={true} caminho={'src/assets/img/card-burger-2-3.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"}/>
      </footer>
    </div>
    
  )
}
