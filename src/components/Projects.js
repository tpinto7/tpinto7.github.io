import { Collapse } from 'antd';
import React from 'react';
import ProjectCard from './ProjectCard';
import './WorkExperience.css';

import Guardian from './images/Guardian.jpg';
import GuardianDashboard from './images/GuardianDashboard.jpg';
import GuardianGraph from './images/GuardianGraph.jpg';
import GuardianHelmet from './images/GuardianHelmet.jpg';

import Census from './images/Census.png';
import CensusFriends from './images/censusfriends.png';
import CensusProfile from './images/censusprofile.png';
import CensusQuery from './images/censusquery.png';


import FireGuard from './images/FireGuard.jpg';
import FireGuardDashboard from './images/FireGuardDashboard.jpg';
import FireGuardMap from './images/FireGuardMap.jpg';



import Bloodbot from './images/bloodbot.png';

const { Panel } = Collapse;
const projects = [
    {
      name: "Guardian", 
      description: "Novel helmet using IOT to improve firefighter helmet. Sensors are used to track environmental data, which is uploaded onto Firebase and displayed in dynamic charts on an interactive dashboard.",
      awards: "Hack the North 2019 Overall Winner, MLH best use of Google Cloud Platform, CANSOFCOM Challenge Winner",
      code: {
        name: "github",
        icon: "mdi-github",
        link: "https://github.com/tpinto7/Guardian"
      },
      devpost: {
        name: "devpost",
        icon: "mdi-alpha-d-box",
        link: "https://devpost.com/software/guardian-2n7q3s"
      },
      images: [
        GuardianDashboard, GuardianGraph, GuardianHelmet, Guardian
      ]
    },
    {
        name: "Census Visualizer", 
        description: "A data-centric web app that allows for users to create their own queries with filters in attributes such as education, employment, sex, and age. Results are returned from a database built off of Canada's census data and is visualied on an overlay of Canada with density and curve customization. Other features include adding friends and sharing queries with them, and customizing your user profile settings (eg dark mode). ",
        code: {
          name: "github",
          icon: "mdi-github",
          link: "https://github.com/tpinto7/census-visualizer"
        },
        images: [Census, CensusFriends]
    },
    {
      name: "FireGuard", 
      description: "A network of IoT beacons that can be placed in forests to predict forest fires. Time-series forecasting was used based off of the readings of each beacon's sensors, and displayed using Google Maps APIs and Vue.js.",
      awards: "Queen's Hacks Top 10 Overall, Sunlife Health Hack Winner, Best use of Radar.io",
      code: {
        name: "github",
        icon: "mdi-github",
        link: "https://github.com/tpinto7/fireguard"
      },
      devpost: {
        name: "devpost",
        icon: "mdi-alpha-d-box",
        link: "https://devpost.com/software/fireguard-07cbjk"
      },
      images: [FireGuard, FireGuardMap, FireGuardDashboard]
    },

    {
      name: "The Blood Bot", 
      description: "A Java GUI that estimates the amount of blood a patient lost during surgery through analyzing the blood saturation of the sponges used. This has wide applications in surgeries and I am working on extending this app to capture images in real-time for analysis.",
      awards: "DeltaHacks 2020 Hypercare Prize for Best Health Hack",
      code: {
        name: "github",
        icon: "mdi-github",
        link: "https://github.com/tpinto7/bloodbot"
      },
      devpost: {
        name: "devpost",
        icon: "mdi-alpha-d-box",
        link: "https://devpost.com/software/the-blood-bot"
      },
      images: [Bloodbot]
    }
]

export class Projects extends React.Component {

  render(){ 
    return (
      <div className="WorkExperience">
          <h1 className="WorkExperience-header">Projects</h1>
          <Collapse defaultActiveKey={['0', '1']}>
            
            { projects.map((project) => {
                return <Panel header={project.name}> 
                    <ProjectCard info={project}/>
                </Panel>

            })}
          </Collapse>
      </div>
    
    );
  }
}

export default Projects;
