import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import Search from "./components/Search";
import Line from "./components/Line";
import data from "./assets/emoji.json";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  library.add(faEnvelope, faKey, faListAlt);
  const [display, setDisplay] = useState(data.slice(0, 20));

  const search = (event) => {
    let results = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].keywords.indexOf(event.toLowerCase()) !== -1) {
        if (results.length >= 20) {
          break;
        } else {
          results.push(data[i]);
        }
      }
    }
    setDisplay(results);
  };

  return (
    <div className="App">
      <Search searchEmoji={search}></Search>
      {display.map((emoji, index) => {
        return <Line key={index} data={emoji} />;
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
