import { useState } from "react";
import "./App.css";
import cardsData from "./cardsData";

function App() {
  const [cardsList, setCardsList] = useState(
    cardsData.sort(() => Math.random() - 0.5)
  );
  // const cardsList = cardsData.sort(() => Math.random() - 0.5);

  const [prevIndexCard, setPrevIndexCard] = useState(-1);

  const selectCard = (i) => {
    // alert(i);
    cardsList[i].status = "selected";
    setCardsList([...cardsList]);
    if (prevIndexCard === -1) {
      setPrevIndexCard(i);
    } else {
      validateCards(i);
    }
  };

  const validateCards = (i) => {
    setTimeout(() => {
      const prev = cardsList[prevIndexCard];
      const current = cardsList[i];
      if (prev.icon === current.icon) {
        prev.status = "up";
        current.status = "up";
      } else {
        prev.status = "down";
        current.status = "down";
      }
      setCardsList([...cardsList]);
      setPrevIndexCard(-1);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="cards__container">
        {cardsList.map((card, i) => (
          <div
            onClick={() => selectCard(i)}
            className={`cards__icons ${card.status}`}
            key={card.id}
          >
            {card.status !== "down" && <i className={card.icon}></i>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
