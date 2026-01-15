import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import FirstComponent from "./Hook/Component1_1";
import HistoryComponent from "./Hook/History";
import Counter from "./Hook/History";
import MyComponent from "./Hook/Ref";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/1_1" element = {<FirstComponent/>}/>
                <Route path="/history" element = {<Counter/>}/>
                <Route path="/ref" element = {<MyComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
