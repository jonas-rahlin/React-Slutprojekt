import React, { useState } from 'react'
import CardForm from "../components/CardForm"
import CardPreview from "../components/CardPreview"
import { Link } from 'react-router-dom'

const AddCard = ({ myCards, setMyCards }) => {
  //Template for Card Object
  const [newCard, setNewCard ]= useState({
    id:"",
    distributor:"Mastercard",
    number:"",
    holder:"",
    expiry:"",
    cvv:""
  });

  return (
      //HTML for generating New Card Form Elements, and Card Preview
      <main>
        <h1>NEW CARD</h1>
        <CardPreview distributor={newCard.distributor} number={newCard.number} holder={newCard.holder} expiry={newCard.expiry} cvv={newCard.cvv} ></CardPreview>
        <CardForm myCards={ myCards } newCard={ newCard } setMyCards={ setMyCards } setNewCard={ setNewCard }></CardForm>
        <Link to="/">
          <button className="home">Back To Start</button>
        </Link>
      </main>
  )
}

export default AddCard
