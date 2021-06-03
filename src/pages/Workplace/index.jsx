/* eslint-disable react/prop-types */
import { Avatar, Card, Col, List, Skeleton ,Row, Button ,Modal,Input, Select,message,Typography} from 'antd';
import React, { Component, useEffect } from 'react';
import { Link, connect } from 'umi';
import { PageContainer} from '@ant-design/pro-layout';
import moment from 'moment';
import styles from './style.less';
import axios from 'axios';
import cookie from 'react-cookies';
import { StatisticCard } from '@ant-design/pro-card';
import { addproxies } from './service';
const { Divider } = StatisticCard;
const { Option } = Select;
const { Paragraph } = Typography;

const PageHeaderContent = ({ currentUser }) => {
const loading = currentUser && Object.keys(currentUser).length;

  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 2,
        }}
        active
      />
    );
  }

  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          {currentUser.name}
        </div>
        <div>
          {currentUser.group} |{currentUser.access}
        </div>
      </div>
    </div>
  );
};





class DashboardWorkplaceTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      server: [],
      modal: false,
      proxy_modal:false,
      sendloading: false,
      api:"",
      yaml:"",
      authority:"private",
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardWorkplaceTwo/init',     
    });

    
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardWorkplaceTwo/clear',
    });
  
  }
  
  
  renderActivities = (item) => {
    const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      if (item[key]) {
        return (
          <a href={item[key].link} key={item[key].name}>
            {item[key].name}
          </a>
        );
      }
      return key;
    });
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
               <a href={item.group.link} key={item.group.name}> {item.group.name} </a>
             
              &nbsp;
              
            
            </span>
          }
          description={
            <span style={styles.updatedAt}>
             <Paragraph  
        ellipsis={
          true
        } key={item.group.name} copyable>{item.project.link}</Paragraph>
             </span>
          }
  
        />
      </List.Item>
    );
  };

  render() {
    const {
      currentUser,
    
    } = this.props;
    if (!currentUser || !currentUser.userid) {

      return (
        <PageContainer
        content={<PageHeaderContent currentUser={currentUser}  />}
        

      >
      <div
    style={{
      background: '#fafafa',
      padding: 24,
    }}
  >   <Skeleton
 
  paragraph={{
    rows: 4,
  }}
  active
/></div>
</PageContainer>
     );
    }

    

    return (
      <PageContainer
        content={<PageHeaderContent currentUser={currentUser} />}
        

      >
       
        
        
      </PageContainer>
    );
  }
}

export default connect(
  ({ dashboardWorkplaceTwo: { currentUser}, loading }) => ({
    currentUser,
  
    currentUserLoading: loading.effects['dashboardWorkplaceTwo/fetchUserCurrent'],
   
  }),
)(DashboardWorkplaceTwo);
