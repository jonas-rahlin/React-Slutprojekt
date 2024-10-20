import React from 'react'
import { setColor } from '../utils/SetColor';

const Card = ({ myCards, setMyCards, id, distributor, number, holder, expiry, cvv}) => {
  //Functionality for Deleting Cards
  const deleteCard = (id) => {
    const updatedCards = myCards.filter(card => card.id !== id);
    setMyCards(updatedCards);
  }

  return (
    //HTML for generating Card Element
    <article className="cardArticle">
        <div className={`card ${setColor(distributor)}`}>
          <div className="container">
            <img className="chip" src="../assets/chip.png" alt="" />
            <span>{distributor}</span>
          </div>
          <span className="number">{number}</span>
          <div className="container">
            <div className="holder">
              <h2>CARD HOLDER</h2>
              <span>{holder}</span>
            </div>
            <div className="expiry">
              <h2>VALID THROUGH</h2>
              <span>{expiry}</span>
            </div>
          </div>
          <span className="cvv">{cvv}</span>
        </div>

        <button className="deleteCard" onClick={() => deleteCard(id)}>Delete Card</button>

    </article>
  )
}

export default Card
