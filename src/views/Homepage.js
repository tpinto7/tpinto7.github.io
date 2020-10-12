import React from 'react';
import { Menu, Avatar } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';
import TypeIt from "typeit-react";
import './Homepage.css';
import Icons from '../components/Icons';
import profile from './images/profile.jpg';
import { Animated } from 'react-animated-css';

// Credits to https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
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
  scrollDown = (id) => {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({
      behavior: 'smooth'
    });
  }

  render(){ 
    return (
      <div className="Homepage">
        <div className="Homepage-nav">
          <nav><Menu theme="dark" breakpoint="lg" mode="horizontal">
            <Menu.Item
              key="about" onClick={() => this.scrollDown("aboutMe")}>
                About Me
            </Menu.Item>
            <Menu.Item onClick={() => this.scrollDown("workExperience")}
              key="work">
                Work Experience
            </Menu.Item>
            <Menu.Item key="projects" onClick={() => this.scrollDown("projects")}>
                Projects
            </Menu.Item>
            <Menu.Item key="contact" onClick={() => this.scrollDown("contactMe")}>
                Contact Me
            </Menu.Item>
          </Menu>
          </nav>

        </div>
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
              loopDelay: 50,
              loop: true,
              waitUntilVisible: true,
              breakLines: false,
              beforeString: function(step, instance) {
                instance.getElement().style.color = getRandomColor();
              }
            }}
          />
          <Icons color="white"/>

        </div>        
        <div className="Homepage-arrow"> 
          <DownCircleOutlined style={arrowStyle} onClick={() => this.scrollDown("aboutMe")}/>
        </div>
      </div>
    );
  }
}

export default Homepage;
