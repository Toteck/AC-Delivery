import "./App.css";
import { Button } from "./components/Button";
import Logos from "./Logos/AC.png";
import { Produto } from "./components/Produto";
import { Lista } from "./components/Lista";
import { Header } from "./components/Header";
import { Icone } from "./components/Icone";
import { Hamburgao } from "./components/Hamburgao";
import burger from "./Logos/burger/burger.png";
import pessoa from "./Logos/freme/pessoa.png";
import bolsa from "./Logos/freme/bolsa.png";
import local from "./Logos/freme/local.png";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <a>
            <img id="AC" src={Logos} alt="Logo do site" />
          </a>
        </div>
        <div id="menu">
          <ul className="container-menu">
            <a>
              <li>Início</li>
            </a>
            <a>
              <li>Burgers</li>
            </a>
            <a>
              <li>Serviços</li>
            </a>
            <a>
              <li>Contato</li>
            </a>
          </ul>
        </div>
        <Button>Fazer Login</Button>
      </div>

      <div className="menu-side">
        <div className="menu-left">
          <h2>😋 Perde tempo não!</h2>
          <h1>
            O Hamburguer
            <br /> mais delicioso
            <br /> da Sua Cidade
          </h1>
          <h3>
            É um fato estabelecido há muito tempo que um
            <br />
            leitor se distrairá com o conteúdo legível de uma
            <br />
            página ao olhar para seu layout.
          </h3>
          <Button>Fazer Pedido</Button>
        </div>
        <div className="menu-right">
          <div className="hamburguer">
            <Hamburgao caminho={'./src/assets/img/hamburgao.svg'} />
          </div>

          <div className="container-icones">
            <div className="icones">
              <Icone
                icon={"./src/assets/img/frame-4.svg"}
                titulo={"Logou"}
                linha_1={"src/assets/img/line-6.svg"}
                linha_2={"src/assets/img/line-7.svg"}
              />
              <Icone
                icon={"./src/assets/img/frame-3.svg"}
                titulo={"Pediu"}
                linha_1={"src/assets/img/line-6.svg"}
                linha_2={"src/assets/img/line-7.svg"}
              />
              <Icone
                icon={"./src/assets/img/frame-2.svg"}
                titulo={"Chegou"}
                linha_1={"src/assets/img/line-6.svg"}
                linha_2={"src/assets/img/line-7.svg"}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="menu-search">
        <div className="container-menu-search">
          <h1 id="title-search">
            Pesquise o seu
            <br />
            Hamburguer favorito!
          </h1>
          <div className="menu-search-row">
            <div className="container-search">
              <a id="icon-search">
                <img
                  className="icon-search"
                  src="src/assets/img/frame-1.svg"
                ></img>
              </a>
              <input
                type="search"
                placeholder="Digite o nome do Burguer"
              ></input>
            </div>
            <div className="container-tipo">
              <Lista
                options={["Todos os Hamburgueres", "Tradicional", "Mexicano"]}
              />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Produto
          promocao={true}
          caminho={"src/assets/img/card-burger-1-1.png"}
          tipo={"Tradicional"}
          titulo={"Texas Burguer"}
          preco={"25,50"}
        />
        <Produto
          promocao={false}
          caminho={"src/assets/img/card-burger-2-3.png"}
          tipo={"Tradicional"}
          titulo={"Texas Burguer"}
          preco={"25,50"}
        />
        <Produto
          promocao={false}
          caminho={"src/assets/img/card-burger-3-1.png"}
          tipo={"Tradicional"}
          titulo={"Texas Burguer"}
          preco={"25,50"}
        />
        <Produto
          promocao={false}
          caminho={"src/assets/img/card-burger-4-1.png"}
          tipo={"Tradicional"}
          titulo={"Texas Burguer"}
          preco={"25,50"}
        />
        <Produto
          promocao={false}
          caminho={"src/assets/img/card-burger-1-2.png"}
          tipo={"Tradicional"}
          titulo={"Texas Burguer"}
          preco={"25,50"}
        />
        <Produto
          promocao={true}
          caminho={"src/assets/img/card-burger-2-3.png"}
          tipo={"Tradicional"}
          titulo={"Texas Burguer"}
          preco={"25,50"}
        />
      </footer>
      <span id="assign">Created by Mateus and Josué</span>
    </div>
  );
}
