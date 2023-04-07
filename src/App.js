import './App.css';
import Header from './Pages/Header';
import Side from './Pages/Side';
import DiscussionList from './Pages/DiscussionList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Side />
        <DiscussionList />
      </div>
    </div>
  );
}

export default App;
