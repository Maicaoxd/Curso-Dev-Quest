import Card from "../card/card";

const cardsTitle = ["Título card 1", "Título card 2", "Título card 3"];

const Cards = () => {
  return (
    <div>
      <h2>Meus cards</h2>
      <div>
        {cardsTitle.map((cardTitle, index) => {
          return (
            <Card key={index}>
              <h3>{cardTitle}</h3>
              <p>Esse é um texto do card {index + 1}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;