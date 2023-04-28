import './App.css';
import BillSection from "./components/BillSection";
import PeopleNumber from "./components/PeopleNumber";
import ResultSection from "./components/ResultSection";
import TipSelect from "./components/TipSelect";

function App() {
  return (
    <div className="App">
    <BillSection />
      <PeopleNumber />
      <ResultSection />
      <TipSelect />
    </div>
  );
}

export default App;
