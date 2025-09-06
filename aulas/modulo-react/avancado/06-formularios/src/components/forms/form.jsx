import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ addCard }) => {
    const [inputs, setInputs] = useState({
        image: "",
    });

    const handleInputChange = (event) => {
        setInputs({
            image: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addCard(inputs);
    };

    return (
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="image">Endereço da imagem da carta</label>
                  <input
                      type="text"
                      id="image"
                      name="image"
                      onChange={handleInputChange}
                      value={inputs.image}
                  />
              </div>
              <input type="submit" />
          </form>
    );
};

Form.propTypes = {
    addCard: PropTypes.func.isRequired,
};

export default Form;
