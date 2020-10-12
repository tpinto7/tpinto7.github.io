import React from 'react';
import { Row, Col } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined, FileOutlined } from '@ant-design/icons';

export class Icons extends React.Component {
  iconStyle = {
    fontSize: '32px',
    color: this.props.color
    
  }
  render(){ 
    return (
      <Row style={{marginTop: '2rem' }}>
        <Col span={6}><a href="https://github.com/tpinto7"> <GithubOutlined style={this.iconStyle} /> </a></Col>
        <Col span={6}><a href="mailto:tjpinto@uwaterloo.ca"> <MailOutlined style={this.iconStyle}  /> </a></Col>
        <Col span={6}><a href="https://github.com/tpinto7"> <LinkedinOutlined style={this.iconStyle} /></a></Col>
        <Col span={6}><a href="https://github.com/tpinto7"> <FileOutlined style={this.iconStyle} /></a></Col>
      </Row>  
    );
  }
}

export default Icons;
