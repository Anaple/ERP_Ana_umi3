import { Tag, Space } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import cookie from 'react-cookies'
import styles from './index.less';
import NoticeIcon from '../NoticeIcon';
import { history, } from 'umi';
import { stringify } from 'querystring';
import { outLogin } from '@/services/login';
export type SiderTheme = 'light' | 'dark';

const loginOut = async () => {
  await outLogin();
  const { query, pathname } = history.location;
  const { redirect } = query;

  // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: pathname,
      }),
    });
  }
};
const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC = () => {
  const { initialState,setInitialState } = useModel('@@initialState');


  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
    
      
      <Avatar />
      
        <span>
          <Tag color={ENVTagColor['dev']}>{REACT_APP_ENV} dev_mode</Tag>
        </span>
      
      <span
      className={styles.action}
      onClick={() => {
        setInitialState({ ...initialState, currentUser: undefined });
        cookie.remove('access_token')
        cookie.remove('username')
        loginOut();
        return;
      }}
      >
      <LogoutOutlined />
      </span>
    
    </Space>
  );
};
export default GlobalHeaderRight;
