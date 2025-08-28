import './button.css'

const Button = ({label = 'Clique aqui'}) => {
  return <button className="btn">{label}</button>
}

export default Button

