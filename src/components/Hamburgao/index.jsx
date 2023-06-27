import './style.css'

export function Hamburgao({caminho}) {
  return(
     <div className="h">
       <img className="burguer" src={caminho} alt="Logo do site" />
       <div className='sombra'></div>
    </div>
  );
}