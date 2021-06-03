import { Button, Result } from 'antd';
import { FormattedMessage, Link } from 'umi';
import React from 'react';
import styles from './style.less';
const actions = (
  <div className={styles.actions}>
    <a href="">
      <Button size="large" type="primary">
        <FormattedMessage id="useranduserregisterresult.register-result.view-mailbox" />
      </Button>
    </a>
    <Link to="/">
      <Button size="large">
        <FormattedMessage id="useranduserregisterresult.register-result.back-home" />
      </Button>
    </Link>
  </div>
);

const UserRegisterResult = ({ location }) => (
  <Result
    className={styles.registerResult}
    status="success"
    title={
      <div className={styles.title}>
        <FormattedMessage
          id="useranduserregisterresult.register-result.msg"
          values={{
            email: location.state ? location.state.account : 'AntDesign@example.com',
          }}
        />
      </div>
    }
    subTitle={<FormattedMessage id="useranduserregisterresult.register-result.activation-email" />}
    extra={actions}
  />
);

export default UserRegisterResult;
