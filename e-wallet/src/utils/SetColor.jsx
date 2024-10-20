//Functionality for setting Color based on Distributor
export const setColor = (distributor) =>{
  let color;
  if(distributor === "Mastercard"){
    color="red"
  } else if(distributor === "Visa"){
    color="yellow"
  } else if(distributor === "American Express"){
    color="green"
  }
  return color
}