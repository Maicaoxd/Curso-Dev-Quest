//import { Component } from "react";
import PropTypes from 'prop-types';
import './card.css';



const Card = ({title}) => {
  return (
    <div className="card">
      <h3>{title ?? 'Sem título'}</h3>
      <p>Esse é um texto do card</p>

    </div>
  )
}

// class Card extends Component{
//   render(){
//     return (
//       <div className="card">
//         <h3>{this.props.title}</h3>
//         <p>Esse é um texto do card</p>

//       </div>
//     )
//   }
// }


// Aqui é só uma validação para garantir que o componente seja usado corretamente, não é obrigatório
Card.propTypes = {
  title: PropTypes.string.isRequired
}

export default Card;