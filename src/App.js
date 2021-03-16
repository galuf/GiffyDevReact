import React, { useState } from "react";
import { Link, Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [keyword, setKeyword] = useState("panda");
  return (
    <div className="App">
      <section className="App-content">
        <h1>App Giffy</h1>
        <div className="links">
          <Link to="/gif/panda" className="link">
            Pandas
          </Link>
          <Link to="/gif/ecuador" className="link">
            Ecuador
          </Link>
          <Link to="/gif/barcelona" className="link">
            Barcelona
          </Link>
          <Link to="/gif/peru" className="link">
            Peru
          </Link>
          <Link to="/gif/matrix" className="link">
            Matrix
          </Link>
        </div>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
