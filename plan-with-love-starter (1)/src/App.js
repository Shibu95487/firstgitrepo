import React from "react";
import data from './data';
import Tours from "./components/Tours"
import { useState } from "react";
const App = () => {
    const [tours, setTours] = useState(data)
    return (
      <div>
        <Tours tours={tours}/>
      </div>

    )
};

export default App;