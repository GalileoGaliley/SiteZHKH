import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import LeftBlock from "./Components/leftBlock";
import RightBlock from "./Components/RightBlock";
import {useContext} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import Footer from "./Components/Footer";

const App = observer(()=>{
    const {text} = useContext(Context)
  return (
      <>
          <div className={'d-flex blocks'}>
              <LeftBlock/>
              <RightBlock />

          </div>
          <Footer />
      </>
  );
})

export default App;
