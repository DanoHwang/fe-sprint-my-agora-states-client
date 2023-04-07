import './App.css';
import Header from './Pages/Header';
import Side from './Pages/Side';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Side />
      </div>
    </div>
  );
}

export default App;
