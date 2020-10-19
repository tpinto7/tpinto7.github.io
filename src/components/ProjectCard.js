import React from 'react';
import { List, Avatar, Carousel } from 'antd';
import './ProjectCard.css';
import image from './images/kayak.jpg';
import {GithubOutlined} from '@ant-design/icons';

const devpostStyle = {
    height: '36px',
    width: '36px',
    marginBottom: 0
}

export class WorkCard extends React.Component {

    render(){ 
      const { info} = this.props;
      return (
        <div className="ProjectCard">
            <div className="ProjectCard-container"> 
                <div className="ProjectCard-item">
                    <div className="ProjectCard-description"> {info.description} </div>
                    {info.awards && <div className="ProjectCard-awards"> <b> {info.awards} </b></div>}
                    <div className="ProjectCard-links-wrapper">                      
                        {info.code && (<div className="ProjectCard-links">
                            <a href={info.code.link}>
                                <GithubOutlined style={{fontSize: '28px', color: 'black'}}/>
                            </a>
                        </div>)}
                        {info.devpost && (<div className="ProjectCard-links">
                            <a href={info.devpost.link}>
                                <img style={devpostStyle} src="https://img.icons8.com/ios-filled/50/000000/devpost.png"/>
                            </a>
                        </div>)}
                    </div>
                </div>
                <div className="ProjectCard-pictures">
                    <Carousel autoplay effect="fade">
                        { info.images.map((image) => <img className="AboutMe-image" src={image} /> )}
                    </Carousel>
                </div>
            
            </div>
            
            {/* <h1 className="WorkCard-header">Work Experience</h1> */}
        </div>
      
      );
    }
  }
  
  export default WorkCard;