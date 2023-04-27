import logo from './logo.svg';
import React, { useEffect } from 'react';
import Bill from './components/Bill'
import SelectTip from './components/SelectTip'
import People from './components/People';
import Viewer from './components/Viewer'
import './App.css';

function App() {

  const [bill, setBill] = React.useState("0")
  const [person, setPerson] = React.useState("0");
  const [tip, setTip] = React.useState("0");
  const [tipAmount, setTipAmount] = React.useState("0.00")
  const [total, setTotal] = React.useState("0.00")

  function updateBill(value) {
    setBill(value);
  }

  function updatePerson(value) {
    setPerson(value)
  }

  function updateTip(value) {
    setTip(value);
    
  }

  React.useEffect(()=> {
    calculate();
  },[bill, person, tip])

  function calculate() {
    console.log(bill, person, tip);
    setTipAmount((bill*tip)/100);
    // if (person !== "") {
    //   const result = Number.isInteger(total/person) ? total/person : (total/person).toFixed(2);
    //   setTotal(result);
    // } else {
    //   setTotal(bill);
    // }
  
  }
 

  return (
    <div className="App">
      <div>SPLI</div>
      <div>TTER</div>
      <div className="calculator">
        <div className="setting">
          <Bill updateBill={updateBill}/>
          <SelectTip updateTip={updateTip}/>
          <People updatePerson={updatePerson}/>
        </div>
        <div className="viewer">
              <Viewer total={total} tipAmount={tipAmount}/>
        </div>
      </div>
    </div>
  );
}

export default App;
