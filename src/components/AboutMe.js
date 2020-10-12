import React from 'react';
import {Carousel} from 'antd';
import './AboutMe.css';

import birthday from './images/birthday.png';
import guardian from './images/Guardian.jpg';
import lotulim from './images/lotulim.png';
import christmas from './images/christmas2.jpg';
import bj from './images/bj.jpg';
import erb from './images/erb.jpg';
import gp from './images/gp.png';
import grad from './images/grad.jpg';
import pats from './images/pats.jpg';
import rome from './images/rome.jpg';
import soccer from './images/soccer.jpg';

const images = [
    birthday, guardian, lotulim, christmas,
    bj, erb, gp, grad, pats, rome, soccer
]

export class AboutMe extends React.Component {
  render(){ 
    return (
      <div className="AboutMe">
        <h1 className="AboutMe-header">Nice to meet you! Here's a little bit about me ...</h1>
        <div className="AboutMe-container">
            <div className="AboutMe-grid-item AboutMe-text">
                <div className="AboutMe-paragraph">
                    Hey! My name is Tyler and I am a third year software engineering student at Waterloo! 
                </div>
                <div className="AboutMe-paragraph">I enjoy creating scalable and modular software for useful and relevant applications. I am currently working as a full stack developer at LCBO|Next, LCBO's Innovation Lab where I am rapidly creating solutions to 
                ease customers' and store owner's pain points during the pandemic. Previously, I worked as a software engineer at Veeva and PointClickCare, both companies in the healthcare and life sciences industries, where I was able to create 
                microservices and RESTful APIs for hundreds of hospitals and pharmaceutical companies. 
                </div>
                <div className="AboutMe-paragraph">I also enjoy problem solving and as a result am on track to get a joint major in combinatorics and optimization. During my free time, I love to play soccer and many other sports, going on trips with friends or family, hanging out with my dog, and catching up on new shows.
                </div>
                <div className="AboutMe-paragraph">Feel free to reach out to me for a coffee or a chat! 
                <b> I am currently seeking co-op opportunities for Summer 2021! </b>
                </div>  
                <div className="AboutMe-paragraph">I have extensive experience with Java, JavaScript, and C++ and am practicing my Python skills on Leetcode! </div>
            </div>
            <div className="AboutMe-grid-item AboutMe-pictures">
                <Carousel autoplay effect="fade">
                    { images.map((image) => <img className="AboutMe-image" src={image} /> )}
                </Carousel> 
            </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
