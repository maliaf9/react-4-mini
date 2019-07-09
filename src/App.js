import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import {HashRouter} from 'react-router-dom';
import routes from './routes.js';
import Home from './Components/Home/Home';
import TopicList from "./Components/TopicList/TopicList";
import Post from "./Components/Post/Post";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Nav />
        {routes}
        
      </div>
      </HashRouter>
    );
  }
}

export default App;
