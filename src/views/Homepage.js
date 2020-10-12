import React from 'react';
import { Menu, Row, Col, Avatar, AutoComplete } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined, FileOutlined, DownCircleOutlined } from '@ant-design/icons';
import TypeIt from "typeit-react";
import './Homepage.css';
import profile from './images/profile.jpg';
import { Animated } from 'react-animated-css';

// Credits to https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const arrowStyle = {
  fontSize: '64px', 
  color: 'white', 
  position: 'absolute', 
  top: '90%', 
  left: '50%',
  MsTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)'

}

export class Homepage extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  scrollDown = () => {
    var elmnt = document.getElementById("aboutMe");
    elmnt.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render(){ 
    const { current } = this.state;
    return (
      <div className="Homepage">
        <div className="Homepage-nav">
          <nav><Menu onClick={this.handleClick} selectedKeys={[current]}  theme="dark" breakpoint="lg" mode="horizontal">
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
          </nav>

        </div>
        {/* <div> */}
          <div className="Homepage-content-wrapper">
            <Avatar className="Homepage-avatar" spin={true} size={128} src={profile}/>
            <Animated animationIn="bounceInDown" animationInDelay={1000}>
              <h1 className="Homepage-name">Tyler Pinto</h1>
            </Animated>
            <TypeIt
              className="Homepage-typeit" 
              options={{
                strings: ["Software Engineering at UWaterloo", "Full Stack Dev @ LCBO", "SWE @ Veeva", "SWE @ PointClickCare"],
                speed: 75,
                nextStringDelay: 1500,
                loopDelay: 1500,
                loop: true,
                waitUntilVisible: true,
                breakLines: false,
                beforeString: function(step, instance) {
                  instance.getElement().style.color = getRandomColor();
                }
              }}
            />
            
            <Row>
              <Col span={6}><a href="https://github.com/tpinto7"> <GithubOutlined style={{fontSize: '32px', color: 'white' }} /> </a></Col>
              <Col span={6}><a href="mailto:tjpinto@uwaterloo.ca"> <MailOutlined style={{fontSize: '32px', color: 'white' }}  /> </a></Col>
              <Col span={6}><a href="https://github.com/tpinto7"> <LinkedinOutlined style={{fontSize: '32px', color: 'white' }} /></a></Col>
              <Col span={6}><a href="https://github.com/tpinto7"> <FileOutlined style={{fontSize: '32px', color: 'white' }} /></a></Col>
              
            </Row>  
          </div>        
          <div className="Homepage-arrow"> 
            <DownCircleOutlined style={arrowStyle} onClick={() => this.scrollDown()}/>
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Homepage;
