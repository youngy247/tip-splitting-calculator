import './App.css';
import BillSection from "./components/BillSection";
import PeopleNumber from "./components/PeopleNumber";
import ResultSection from "./components/ResultSection";
import TipSelect from "./components/TipSelect";

function App() {
  return (
    <div className="App container">
      <div className="row">
      <div className="col-sm-12 col-md-6">
    <BillSection />
      <PeopleNumber />
      <TipSelect />
      </div>
      <div className="col-sm-12 col-md-6">
      <ResultSection />
      </div>
      </div>
    </div>
  );
}

export default App;
