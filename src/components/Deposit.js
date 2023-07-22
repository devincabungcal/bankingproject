import React, { useState } from "react";
import { makeDeposit } from "../api";

let status = "Account Balance $0";

const Deposit = () => {
  const [deposit, setDeposit]         = React.useState("");

  const handleSubmit = event => {
    makeDeposit(deposit)
  };
  
  return (
    <label className="label huge">
      Deposit:
      <input type="number" value={deposit} onChange={e => setDeposit(+e.currentTarget.value)}></input>
      <input type="submit" onClick={handleSubmit}></input>
      <h1 id="total">{status}</h1>
    </label>
  );
};

export default Deposit