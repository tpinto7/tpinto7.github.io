import React from 'react';
import { Menu, Row, Col } from 'antd';
import './Homepage.css';

export class Homepage extends React.Component {
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
      <div className="Homepage">
        <div className="Homepage-nav">
          <Menu onClick={this.handleClick} selectedKeys={[current]}  mode="horizontal">
            <Menu.Item
              key="home">
              
                Home
            </Menu.Item>
            <Menu.Item
              key="register">
                Register
            </Menu.Item>
            <Menu.Item key="signin">
                Sign In
            </Menu.Item>
          </Menu>
        </div>
        <div className="Homepage-content-wrapper">
          <h1 className="Homepage-name">Tyler Pinto</h1>
          <div className="Homepage-description"> I am ... </div>
          <Row>
            <Col span={6}>github</Col>
            <Col span={6}>email</Col>
            <Col span={6}>linkedin</Col>
            <Col span={6}>resume</Col>
            
          </Row>  
        </div>


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default Homepage;
