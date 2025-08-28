import { Component } from "react";
import './card.css';

class Card extends Component{
  render(){
    return (
      <div className="card">
        <h3>Título</h3>
        <p>Esse é um texto do card</p>

      </div>
    )
  }
}

export default Card;