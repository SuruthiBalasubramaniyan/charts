 import './App.css';
import Vchart from './components/Vchart';
import Nchart from './components/Nchart';
import Echart from './components/Echart';
import Vichart from './components/Vichart';
function App() {
  return (
    <div>
       <h1>Pie and Bar Diagram</h1>
       <Vchart />
       <Nchart/>
       <Echart/>
       <Vichart/>
    </div>
  );
}

export default App;
