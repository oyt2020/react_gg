import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import FirstComponent from "./Hook/Component1_1";
import HistoryComponent from "./Hook/History";
import Counter from "./Hook/History";
import MyComponent from "./Hook/Ref";
import M from "./Hook/Compare";
import Timer from "./Hook/S";
import ModelLoad from "./Hook/ModelLoad";

function App() {
    return (
        <div className="App">
            <br/>
            /1_1 : 1-1 실습
            <br/>
            /history : 1-2 실습
            <br/>
            /ref : 3-1 실습
            <br/>
            /compare : 3-2 실습
            <br/>
            /timer : 6 실습
            <br/>
            /model : 모델 로드 실습
            <Routes>
                <Route path="/1_1" element = {<FirstComponent/>}/>
                <Route path="/history" element = {<Counter/>}/>
                <Route path="/ref" element = {<MyComponent/>}/>
                <Route path="/compare" element = {<M />}/>
                <Route path="/timer" element = {<Timer/>}/>
                <Route path="/model" element = {<ModelLoad/>}/>
            </Routes>
        </div>
    );
}

export default App;
