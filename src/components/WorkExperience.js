import { Collapse } from 'antd';
import React from 'react';
import WorkCard from './WorkCard';
import './WorkExperience.css';

const { Panel } = Collapse;
const jobs = [
    {
        name: "LCBO|Next",
        role: "Full Stack Developer",
        date: "Sep 2020 - Dec 2020",
        points: [
            "Developing web app used by 420 agency stores to be alerted of relevant pricing updates and view, oversee, and print dynamically-created product labels using Typescript and React.",
            "Creating APIs to track product pricing updates, verify Azure authentication, and users' print histories with Node.js, Express, and PostgreSQL.",
            "Performing integration testing using Kubernetes and Kong to incorporate Skip the Dishes' online delivery platform."
        ]
        
    },
    {
        name: "Veeva",
        role: "Software Engineer",
        date: "Jan 2020 - Apr 2020",
        points: [ "Implemented async job thread in Java which validates an object’s component dependencies and persists the results to SQL database, reducing UI latency by 7.5s.",
                "Added validation logic to an import endpoint that stores results to a downloadable attachment using Java, decreasing the number of components with errors being deployed by 87%.",
                "Wrote scripts in company-specific metadata language to create notification and configuration report templates.",
                "Constructed frontend logic and components using JS and React to enhance data transferred to RESTful APIs."
            ],
    },
    {
        name: "PointClickCare",
        role: "Software Engineer",
        date: "May 2019 - Aug 2019",
            points: [ "Architected and implemented a scalable data model for the Identity and Access Management microservice used by over 100 hospitals using Java, Spring and MySQL.",
                    "Developed over 20 RESTful API endpoints for the admin management of users, including pagination, searching, password encryption, email validation, and the management of users’ apps and accessing entities.",
                    "Designed client-side web application using Vue.js and Bootstrap to enable state management and connect developed APIs. Integrated Recaptcha onto login components to improve security by 68%.",
                    "Created a Chrome Extension that parses a patient’s profile using jQuery in under 0.1s and fetches their medical history, observations, and activities.",
                    "Built workflow using Kubernetes, Argo, and Linux to automate the onboarding process for new customers." 
            ],
    },
    {
        role: "Undergraduate Research Assistant",
        name: "Sports Applications of Machine Learning Lab",
        date: "Jan 2019 - Present",
        points: ["Collaborated with three team members to prepare a paper accepted at California’s Computer Vision and Pattern Recognition 2019 Expo (arxiv.org/abs/1903.06528).", 
                "Compiled dataset for TensorFlow model by using MATLAB to provide pose estimation and event detection for golf swings using computer vision.",
                "Integrating deep learning model onto mobile app using Swift and XCode."
        ],
    }
]

export class WorkExperience extends React.Component {

  render(){ 
    return (
      <div id="workExperience" className="WorkExperience">
          <h1 className="WorkExperience-header">Work Experience</h1>
          <Collapse defaultActiveKey={['0']}>
            
            { jobs.map((job) => {
                return <Panel header={job.role + ' @ ' + job.name}> 
                    <WorkCard info={job}/>
                </Panel>

            })}
          </Collapse>
      </div>
    
    );
  }
}

export default WorkExperience;
