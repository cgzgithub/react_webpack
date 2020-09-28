import React from 'react';
import './App.css';
import AsyncComponent from "@/router/asyncComponent.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
const pageLayout = AsyncComponent(() => import("@/component/layout/Layout"));
class App extends React.Component{
  render(){
    return(
      <Router >
        <Route path="/" component={pageLayout} />
      </Router>
    )
  }
}

export default App;
