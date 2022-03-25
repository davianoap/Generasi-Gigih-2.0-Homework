import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

const MUSPLAY=process.env.REACT_APP_MUSPLAY
function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}




export default App;
