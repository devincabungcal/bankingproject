import React, { useState } from "react";
import { makeWithdrawal } from "../api";

let status = "Account Balance $0";

const Withdraw = () => {
  const [withdraw, setWithdraw]         = React.useState("");

  const handleSubmit = event => {
    makeWithdrawal(withdraw)
  };
  
  return (
    <label className="label huge">
      Withdraw:
      <input type="number" value={withdraw} onChange={e => setWithdraw(+e.currentTarget.value)}></input>
      <input type="submit" onClick={handleSubmit}></input>
      <h1 id="total">{status}</h1>
    </label>
  );
};

export default Withdraw