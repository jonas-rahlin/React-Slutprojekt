  import React from 'react';
  import { useNavigate } from 'react-router-dom';

  const CardForm = ({myCards, setMyCards, newCard, setNewCard}) => {
    //Implement useNavigate functionality
    const navigate = useNavigate();

    //Actively update Card Object while filling out form
    const handleChange = (e) => {

          setNewCard({ ...newCard, [e.target.name]: e.target.value, });
    };

    //Validation for Form Inputs
    //Date
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const minMonth = `${year}-${month}`;

    //Save Card Object to Card Array
    const handleSubmit = (e) => {
        e.preventDefault();

        if(myCards.length < 4) {
          setMyCards(prevCards => [
            ...prevCards, 
            { ...newCard, id: Date.now().toString() }]); //Generate a Unique ID
          setNewCard(
            {
              id:"",
              distributor:"MasterCard",
              number:"",
              holder:"",
              expiry:"",
              cvv:""
            }
          );
        } else {alert("Card Limit Reached! Please Remove A Card.")}

        //Route back to Start
        navigate('/');
    }

    return (
      //HTML for generating the Card creation Form
      <form onSubmit={handleSubmit}>
          <label className="formDistributor">
            <select name="distributor" value={newCard.distributor} onChange={handleChange}>
              <option value="Mastercard">Mastercard</option>
              <option value="Visa">Visa</option>
              <option value="American Express">American Express</option>
            </select>
          </label>

          <label className="formHolder">
            <input
              type="text"
              name="holder"
              value={newCard.holder}
              onChange={handleChange}
              placeholder="Card Holder"
              required
              title="Only alphabetic characters are allowed."
              pattern="^[^\d]*$"
            />
          </label>

          <label className="formNumber">
            <input
              type="text"
              name="number"
              value={newCard.number}
              onChange={handleChange}
              placeholder="Card Number"
              required
              maxLength={16}
              minLength={16}
              pattern="\d*"
              title="Only numeric characters are allowed."
            />
          </label>

          <label className="formDate">
            <input
              type="month"
              name="expiry"
              value={newCard.expiry}
              onChange={handleChange}
              required
              min={minMonth}
            />
          </label>

          <label className="formCVV">
            <input
              type="text"
              name="cvv"
              value={newCard.cvv}
              onChange={handleChange}
              placeholder="CVV"
              required
              maxLength={3}
              minLength={3}
              pattern="\d*"
              title="Only numeric characters are allowed."
            />
          </label>
          <button className="formSubmit" type="submit">Submit</button>
        </form>
    )
  }

  export default CardForm
