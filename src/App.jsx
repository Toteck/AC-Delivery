import './App.css'
import { Button } from './components/Button'
import Logos from "./Logos/AC.png"
import { Produto } from "./components/Produto"
import { Lista } from "./components/Lista"
import burger from "./Logos/burger/burger.png"
import pessoa from "./Logos/freme/pessoa.png"
import bolsa from "./Logos/freme/bolsa.png"
import local from "./Logos/freme/local.png"



export default function App() {
  return (
    <div className='container'>
      <header>
        <img id="AC" src={Logos} alt="Logo do site" />
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
          <h1>O Hamburguer<br /> mais delicioso<br /> da Sua Cidade</h1>
          <h3>É um fato estabelecido há muito tempo que um<br />leitor se distrairá com o conteúdo legível de uma<br />página ao olhar para seu layout.</h3>
          <Button>Fazer Pedido</Button>
        </div>
        <div id='menu-right'>
          <img id="burger" src={burger} alt="Logo do site" />
          <div id="freme">
          <img id="pessoa" src={pessoa} alt="pessoa" />
            <h1>Logou</h1>
          <img id="bolsa" src={bolsa} alt="bolsa" />
            <h1>Pediu</h1>
          <img id="local" src={local} alt="local" />
            <h1>Chegou</h1>
          </div>
          
          
        </div>
      </div>
      <div className="menu-search">
        <div className='container-menu-search'>
        <h1 id="title-search">Pesquise o seu<br />Hamburguer favorito!</h1>
        <div className='menu-search-row'>
          <div className="container-search">
            <a id="icon-search">
              <img className="icon-search" src='src/assets/img/frame-1.svg'></img>
            </a>
            <input type="search" placeholder="Digite o nome do Burguer"></input>
          </div>
          <div className="container-tipo">
            <Lista options={['Todos os Hamburgueres', 'Tradicional', 'Mexicano']} />
          
          </div>
        
        </div>
        </div>
      </div>
      <footer>

        <Produto promocao={true} caminho={'src/assets/img/card-burger-1-1.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"} />
        <Produto promocao={false} caminho={'src/assets/img/card-burger-2-3.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"} />
        <Produto promocao={false} caminho={'src/assets/img/card-burger-3-1.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"} />
        <Produto promocao={false} caminho={'src/assets/img/card-burger-4-1.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"} />
        <Produto promocao={false} caminho={'src/assets/img/card-burger-1-2.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"} />
        <Produto promocao={true} caminho={'src/assets/img/card-burger-2-3.png'} tipo={'Tradicional'} titulo={'Texas Burguer'} preco={"25,50"} />
      </footer>
    </div>

  )
}
