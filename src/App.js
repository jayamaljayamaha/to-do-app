import './App.css';
import React from "react";
import Header from "./components/Header";
import BodyArea from "./components/Body";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <BodyArea/>
        </div>
    );
}

export default App;
