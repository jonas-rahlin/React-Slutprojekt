import {Link} from "react-router-dom";
import Card from "../components/Card";

const Start = ({ myCards, setMyCards }) => {
  //HTML for generating Start Page Elements
  return (
    <main>
        <Link to="/add-card">
          <button className="addCard">Add Card</button>
        </Link>
        <h1>MY CARDS</h1>
        <div className="container">
          {myCards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              distributor={card.distributor}
              number={card.number}
              holder={card.holder}
              expiry={card.expiry}
              cvv={card.cvv}
              myCards={myCards}
              setMyCards={setMyCards}
            ></Card>
          ))}
        </div>
    </main>
  )
}

export default Start
