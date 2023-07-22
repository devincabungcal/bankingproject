import React from 'react'
import userContext from './Context'


let transactionState = 0;
let totalState = 0;
let status = "Account Balance $0";


const handleChange = event => {
  console.log(`handleChange ${event.target.value}`);
  transactionState = Number(event.target.value);
};
const handleSubmit = event => {
  totalState += transactionState;
  status = `Current Account Balance $ ${-totalState}`;
  alert(`Updated Balance: $${-totalState, -transactionState}`);
  document.getElementById("total").innerHTML = status;
  event.preventDefault();
};

const Deposit = () => {
  return (
    <label className="label huge">
      Withdraw:
      <input type="number" onChange={handleChange}></input>
      <input type="submit" onClick={handleSubmit}></input>
      <h1 id="total">{status}</h1>
    </label>
  );
};

function Account() {
  const [accountState, setAccountState] = React.useState(0);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setAccountState(event.target.value);
  };
  function handleSubmit(event) {
    alert(`Account total = ${accountState}`);
    event.preventDefault();
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <Deposit onChange={handleChange}> Deposit</Deposit>
    </form>
    
  );
};

export default Account;