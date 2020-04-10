import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import Header from './Components/Header';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  render() {

    return(
      <div>
        <Dashboard />
        <Form />
        <Header />
      </div>
    )
  }
}

export default App;