import React from "react" ;
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Message from "./components/Message";

    

let root=ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />,<Message/>);