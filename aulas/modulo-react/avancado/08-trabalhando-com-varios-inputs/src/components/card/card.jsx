import React from 'react'
import PropTypes from 'prop-types'; // Importa PropTypes
import './card.css'


const Card = ({ children, color, showCardColor }) => {
    return (
        <div 
        className='card' 
        style={{ backgroundColor: color }} 
        onClick={() => showCardColor(color)}>
            {children}
        </div>
    )
}

// Define as propTypes para Card - para o funcionamento correto do PropTypes, é necessário importar a biblioteca PropTypes. É usado no VITE para garantir que os componentes recebam os tipos corretos de propriedades.

Card.propTypes = {
    children: PropTypes.node, // node cobre qualquer coisa que possa ser renderizada: números, strings, elementos ou arrays contendo esses tipos.
    color: PropTypes.string,
    showCardColor: PropTypes.func.isRequired, // Indica que showCardColor é uma função e é obrigatória.
};


Card.defaultProps = {
    color: 'orange'
}

export default Card