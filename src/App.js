import './App.css';
import BillSection from "./components/BillSection";
import PeopleNumber from "./components/PeopleNumber";
import ResultSection from "./components/ResultSection";
import TipSelect from "./components/TipSelect";
import {useState} from "react";

const App = () => {

  const [billAmount, setBillAmount] = useState('')
  const [tipPercentage, setTipPercentage] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const reset = () => {
    setBillAmount('');
    setTipPercentage('');
    setNumPeople('');
    setTipAmount(0);
    setTotalAmount(0);

  };

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage) / 100;
    const people = parseInt(numPeople);


    if (isNaN(bill) || isNaN(tip) || isNaN(people) || people === 0) {
      setTipAmount(0);
      setTotalAmount(0);
    } else {
      const tipAmount = bill * tip;
      const totalAmount = (bill + tipAmount) / people;
      setTipAmount(tipAmount.toFixed(2));
      setTotalAmount(totalAmount.toFixed(2));
    }
  }

  return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <BillSection billAmount={billAmount} setBillAmount={setBillAmount}/>
            <TipSelect tipPercentage={tipPercentage} setPercentage={setTipPercentage}/>
            <PeopleNumber numPeople={numPeople} setNumPeople={setNumPeople} calculateTip={calculateTip}/>
          </div>
          <div className="col-sm-12 col-md-6">
            <ResultSection tipAmount={tipAmount} totalAmount={totalAmount}
                           setTipAmount={setTipAmount} setTotalAmount={setTotalAmount}
                           calculateTip={calculateTip}/>
          </div>
        </div>
      </div>
  );
}

export default App;
