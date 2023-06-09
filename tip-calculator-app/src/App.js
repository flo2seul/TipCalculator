import React, { useEffect } from 'react';
import Bill from './components/Bill'
import SelectTip from './components/SelectTip'
import People from './components/People';
import Viewer from './components/Viewer'
import './App.css';
import logo from './images/logo.svg';

function App() {

  const [bill, setBill] = React.useState("0")
  const [person, setPerson] = React.useState("0");
  const [tip, setTip] = React.useState("0");
  const [tipAmount, setTipAmount] = React.useState("0.00");
  const [total, setTotal] = React.useState("0.00");
  const [reset, setReset] = React.useState(false);

  function updateBill(value) {
    if (reset) {
    setReset(false);
    }
    setBill(value);
  }

  function updatePerson(value) {
    if (reset) {
      setReset(false);
      }
    setPerson(value)
  }

  function updateTip(value) {
    if (reset) {
      setReset(false);
      }
    setTip(value);
    
  }

  React.useEffect(()=> {
    if (person*bill*tip !== 0) calculate();
    
  },[bill, person, tip])

  function calculate() {
    const totalTip = (bill*tip)/100
    const totalCost = (bill*1) + (totalTip*1);
    const resultTip = Number.isInteger(totalTip/person) ? totalTip/person : (totalTip/person).toFixed(2)
    const resultTotal = Number.isInteger(totalCost/person) ? totalCost/person : (totalCost/person).toFixed(2)
    setTipAmount(resultTip);
    setTotal(resultTotal)
  
  }

 
  function onResetClick(e) {
    setTipAmount(0.00)
    setTotal(0.00)
    setBill(0)
    setTip(0)
    setPerson(0)
    setReset(true)
  }

 
  

  return (
    <div className="App">
      <img src={logo} alt=""/>
      <div className="calculator">
        <div className="setting">
          <Bill updateBill={updateBill} reset={reset}/>
          <SelectTip updateTip={updateTip} reset={reset}/>
          <People updatePerson={updatePerson} reset={reset}/>
        </div>
        <div className="viewer">
          <Viewer total={total} tipAmount={tipAmount} onResetClick={onResetClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
