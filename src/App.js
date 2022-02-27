import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import LeftBlock from "./Components/leftBlock";
import RightBlock from "./Components/RightBlock";

function App() {
  return (
      <>
          <div className={'d-flex blocks'}>
              <LeftBlock/>
              <RightBlock />
          </div>

      </>
  );
}

export default App;
