import './style.css'

export function Icone({ icon, titulo, linha_1, linha_2 }) {
  return (
    <div className="container-icone">
      <div className="icones">
        <img className="icon" src={icon} alt="pessoa" />
      </div>

      <div className="description">
        <span className='titulo'>{titulo}</span>
        <img className='linha' src={linha_1}></img>
        <img className='linha' src={linha_2}></img>
      </div>
    </div>
  );
}
