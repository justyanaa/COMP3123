import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Student stID="101355228" stName="Iana Bosenko" stCollege="George Brown College, Toronto"/>
      </header>
    </div>
  );
}

export default App;
