import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import TodayTime from './TodayTime';
import GetItems from './Items';
import GetUser from './ShowUser';
import CountButton from './CountButton';
import ShowHover from './ShowHover';
import TodayTimeMilli from './TodayTimeMilli';
import InputViewer from './InputViewer';
import Counter from './Counter';

function App() {
  const user_data = { name: "Dotan", last_name: "Di Castro", city: "Haifa", };
  return (

    < div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload DOTAN2.
        </p>
        <Greeting />
        <TodayTime />
        <Counter />
        <InputViewer />
        <TodayTimeMilli />
        <ShowHover />
        <CountButton />
        {console.log("HELLLLLLLOOOO")}
        <GetItems max_items={2} />
        <GetUser user={user_data} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div >
  );
}

export default App;
