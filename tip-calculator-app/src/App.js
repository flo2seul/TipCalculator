import logo from './logo.svg';
import React from 'react';
import Bill from './components/Bill'
import SelectTip from './components/SelectTip'
import People from './components/People';
import Viewer from './components/Viewer'
import './App.css';

function App() {

  const [bill, setBill] = React.useState("0")
  const [total, setTotal] = React.useState("0.00")
  const [tip, setTip] = React.useState("0");
  
  
  function updateBill(value) {
    setBill(value);
  }
  function updateTotal(value) {
    setTotal(value);
    return value;
  }
  function updatePerson(value) {
    //setPerson(value);
   const person = value;
    
    calculate(person);
  }
  function updateTip(value) {
    setTip(value)
  }
  function calculate(person) {
    
    if (person !== "") {
 
      setTotal(total/person);
    } else {
      setTotal(bill);
    }
  }
 

  return (
    <div className="App">
      <div>SPLI</div>
      <div>TTER</div>
      <div className="calculator">
        <div className="setting">
          <Bill updateTotal={updateTotal} updateBill={updateBill}/>
          <SelectTip/>
          <People updatePerson={updatePerson}/>
        </div>
        <div className="viewer">
              <Viewer total={total}/>
        </div>
      </div>
    </div>
  );
}

export default App;
