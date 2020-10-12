import React from 'react';
import Icons from './Icons';
import './ContactMe.css';
export class ContactMe extends React.Component {
  render(){ 
    return (
      <div id="contactMe" className="ContactMe">
        <h1>Contact Me</h1>
        <Icons className="ContactMe-icons" color="black" />
        <div className="website">
            tylerpinto.me
        </div>
      </div>
    );
  }
}

export default ContactMe;
