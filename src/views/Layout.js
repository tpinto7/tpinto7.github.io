import React from 'react';
import AboutMe from '../components/AboutMe';
import TrueFalse from '../components/TrueFalse';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import './Layout.css';
export class Layout extends React.Component {
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
        <div className="Layout">
            <AboutMe/>
            <TrueFalse/>
            <WorkExperience/>
            <Projects/>
        </div>
    );
  }
}

export default Layout;
