import logo from './logo.svg';
import Bill from './components/Bill'
import SelectTip from './components/SelectTip'
import People from './components/People';
import Viewer from './components/Viewer'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>SPLI</div>
      <div>TTER</div>
      <div className="calculator">
        <div className="setting">
          <Bill/>
          <SelectTip/>
          <People />
        </div>
        <div className="viewer">
              <Viewer/>
        </div>
      </div>
    </div>
  );
}

export default App;
