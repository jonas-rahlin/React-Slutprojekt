import React from 'react'
import { setColor } from "../utils/SetColor"

const Card = ({ distributor, number, holder, expiry, cvv}) => {
  //Set Default Values for Empty Form Values
  const distributorD = distributor || "Default Distributor";
  const numberD = number || "0000000000000000";
  const holderD = holder || "John Jane";
  const expiryD = expiry || "MM/YY";
  const cvvD = cvv || "000";

  //HTML for generating Card on screen
  return (
    <article className="cardArticle">
        <div className={`card ${setColor(distributor)}`}>
          <div className="container">
            <img className="chip" src="../assets/chip.png" alt="" />
            <span>{distributorD}</span>
          </div>
          <span className="number">{numberD}</span>
          <div className="container">
            <div className="holder">
              <h2>CARD HOLDER</h2>
              <span>{holderD}</span>
            </div>
            <div className="expiry">
              <h2>VALID THROUGH</h2>
              <span>{expiryD}</span>
            </div>
          </div>
          <span className="cvv">{cvvD}</span>
        </div>
    </article>
  )
}

export default Card