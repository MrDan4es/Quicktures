import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm/';
import RegisterForm from '../components/RegisterForm';
import { Context } from '../index';

const PageLoginRegister = () => {
  const { authStore } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      navigate('/', { replace: true });
    }
  }, [navigate, authStore.isAuth]);

  return (
    <div className="container">
      <div
        className="col-12 text-center display-6"
        style={{ color: '#4d7a0b' }}
      >
        QuickTures
      </div>
      <div className="container row g-0">
        <Tabs
          defaultActiveKey="login"
          id="uncontrolled-tab-example"
          className="justify-content-center pt-2"
        >
          <Tab
            eventKey="login"
            title="Login"
            className="col col-sm-8 col-md-6 col-lg-4 mx-auto"
          >
            <LoginForm />
          </Tab>
          <Tab
            eventKey="signup"
            title="Sign Up"
            className="col col-sm-8 col-md-6 col-lg-4 mx-auto"
          >
            <RegisterForm />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default observer(PageLoginRegister);
