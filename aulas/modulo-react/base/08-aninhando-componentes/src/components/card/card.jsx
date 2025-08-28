//import { Component } from "react";
import PropTypes from 'prop-types';
import './card.css';



const Card = ({children}) => {
  return (
    <div className="card">
      {children}
    </div>
  )
}


// Aqui é só uma validação para garantir que o componente seja usado corretamente, não é obrigatório
Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card;