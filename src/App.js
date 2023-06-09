import './App.css';
import BillSection from "./components/BillSection";
import PeopleNumber from "./components/PeopleNumber";
import ResultSection from "./components/ResultSection";
import TipSelect from "./components/TipSelect";
import {useEffect, useState} from "react";

const App = () => {

  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('0');
  const [numPeople, setNumPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState('0.00');
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [tipPerPerson, setTipPerPerson] = useState('0.00');

  const reset = () => {
    setBillAmount('');
    setTipPercentage('0');
    setNumPeople('1');
    setTipAmount('0.00');
    setTotalAmount('0.00');
    setTipPerPerson('0.00')
  }

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage) / 100;
    const people = parseInt(numPeople);

    if (isNaN(bill) || isNaN(tip) || isNaN(people) || people === 0) {
      setTipAmount('0.00');
      setTipPerPerson('0.00');
      setTotalAmount('0.00');
    } else {
      const tipAmount = bill * tip;
      const tipPerPerson = tipAmount / people
      const totalAmount = (bill + tipAmount) / people;
      setTipAmount(tipAmount.toFixed(2));
      setTipPerPerson(tipPerPerson.toFixed(2));
      setTotalAmount(totalAmount.toFixed(2));
    }
  }

  useEffect(() => {
    calculateTip();
  }, [billAmount, tipPercentage, numPeople])

  return (
      <div className="App container-fluid">
        <h1>Tip Calculator</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <BillSection billAmount={billAmount} setBillAmount={setBillAmount} calculateTip={calculateTip}/>
            <TipSelect tipPercentage={tipPercentage} setPercentage={setTipPercentage} calculateTip={calculateTip}/>
            <PeopleNumber numPeople={numPeople} setNumPeople={setNumPeople} calculateTip={calculateTip}/>
          </div>
          <div className="col-sm-12 col-md-6">
            <ResultSection tipAmount={tipAmount} totalAmount={totalAmount}
                           tipPerPerson={tipPerPerson} setTipPerPerson={setTipPerPerson}
                           setTipAmount={setTipAmount} setTotalAmount={setTotalAmount}
                           calculateTip={calculateTip} reset={reset}/>
          </div>
        </div>
      </div>
  );
}

export default App;
