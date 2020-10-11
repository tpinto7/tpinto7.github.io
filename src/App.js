import React from 'react';
import logo from './logo.svg';
import { Menu } from 'antd';
import Homepage from './views/Homepage';
import Layout from './views/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

export class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render(){ 
    const { current } = this.state;
    return (
      <div className="App">
        <Homepage/>
        <Layout/>
      </div>
    );
  }
}

export default App;
