import React from 'react';
import Main from './components/MainComponent'
import{ Route, Routes } from "react-router-dom"
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import Home from './components/Home';
import userContext from './components/Context';


function App() {

  const globalUsers = {users:[{name:'', email:'', password:''}]}
 
  return (
    <div className="App">
     
      
     <Main/>
      
      <userContext.Provider value={{globalUsers}}>
  
        <Routes>
          
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/createAccount" element={<CreateAccount/>} />
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/alldata" element={<AllData/>} />
        </Routes>
       
      </userContext.Provider>
      
     
    </div>
  );
}

export default App;
