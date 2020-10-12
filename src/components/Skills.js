import React from 'react';
import {Carousel} from 'antd';
import './Skills.css';
import { Row, Col } from 'antd';
import { CodeOutlined, DesktopOutlined, CloudOutlined } from '@ant-design/icons';
const iconStyle = {
  fontSize: '64px',
}
export class Skills extends React.Component {
  render(){ 
    return (
      <div className="Skills">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginTop: '2rem' }}>
          <Col className="gutter-row" span={8}>
            <div className="Skills-grid-item">
              <CodeOutlined style={iconStyle} />
              <h1 className="Skills-title"> Back-End </h1>
              <ul className="Skills-grid-item-bullets">
                <li> Java </li>
                <li> C++ </li>
                <li> Spring </li>
                <li> Node.js </li>
                <li> Express </li>
                <li> SQL </li>
                <li> Kotlin </li>
                <li> Python </li>
                <li> Go </li>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="Skills-grid-item">
            <DesktopOutlined style={iconStyle} />
            <h1 className="Skills-title"> Front-End </h1>
            <ul className="Skills-grid-item-bullets">
              <li> JavaScript </li>
              <li> React </li>
              <li> Vue.js </li>
              <li> jQuery </li>
              <li> HTML/CSS </li>
              <li> Chrome Extensions </li>
              <li> Bootstrap/Ant Design </li>
              <li> Sass </li>
              <li> Responsive Web Design </li> 
            </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="Skills-grid-item">
              <CloudOutlined style={iconStyle} />
              <h1 className="Skills-title"> Architecture & DevOps </h1>
              <ul className="Skills-grid-item-bullets">
                <li> Scalable architecture </li>
                <li> Microservices </li>
                <li> RESTful APIs </li>
                <li> Docker </li>
                <li> Kubernetes </li>
                <li> Linux </li>
                <li> GCP/Firebase </li>
                <li> Git </li>
                <li> Internet of Things </li> 
              </ul>
            </div>
          </Col>
        </Row>  
      </div>
    );
  }
}

export default Skills;
