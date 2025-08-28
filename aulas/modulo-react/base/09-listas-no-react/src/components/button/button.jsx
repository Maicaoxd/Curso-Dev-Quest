import { Component } from 'react'
import './button.css'

// const Button = ({label}) => {
//   return <button className="btn">{label}</button>
// }

class Button extends Component {
  render() {
    return <button className="btn">{this.props.label}</button>
  }
}

Button.defaultProps = {
  label: "Clica aqui"
}

export default Button