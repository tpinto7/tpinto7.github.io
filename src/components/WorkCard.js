import React from 'react';
import { List, Avatar } from 'antd';
import profile from './images/profile.jpg';
export class WorkCard extends React.Component {

    render(){ 
      const { info } = this.props;
      return (
        <div className="WorkCard">
            <List
                itemLayout="horizontal"
                dataSource={info.points}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta className="metaa"
                        avatar={<Avatar size={32} src={profile} />}
                        title={<a className="collapse-title">{item.title}</a>}
                        description={item}
                        />
                    </List.Item>
                )}
            />
            
            {/* <h1 className="WorkCard-header">Work Experience</h1> */}
        </div>
      
      );
    }
  }
  
  export default WorkCard;