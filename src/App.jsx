import './App.css'
import {Button} from './components/Button'
import Logos from "./Logos/AC.png";
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
      <div className='menu-left'>
        <h1>Menu esquerdo</h1>
      </div>
      <div className='menu-right'>
        <h1>Menu direita</h1>
      </div>
      </div>
      <div className="menu-search">
        <h1>Menu pesquisar</h1>
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
