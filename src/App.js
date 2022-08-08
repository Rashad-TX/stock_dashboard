import React, { useState } from "react";
import axios from "axios";
import Getdata from "./helpers/GetData";
import "./App.css";
import Header from "./components/Header";


const App = () => {

    return (
<div className ="App">
<Header/>
<Getdata/>
</div>
    )
}
 
export default App;
