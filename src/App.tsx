import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import LoginForm from './assets/LoginForm';
import RegistrationForm from './assets/RegistrationForm';
import { NavLink, Switch, Route } from 'react-router-dom';
import ProfileView from './assets/ProfileView';
import CommentsView from './assets/CommentsView';
import TableView from './assets/TableView';
import MapsView from './assets/MapsView';
import { useTranslation } from "react-i18next";
import DropdownLanguage from './DropdownLanguage';
import { Button, createMuiTheme, FormControl, Input, InputLabel, TextField, ThemeProvider } from '@material-ui/core'
import ChangeFontSize from './assets/ChangeFontSize';


function App() {
  return (

    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

const Navigation = () => {
  const { t, i18n } = useTranslation();
  return (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>{t("Home")}</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/register'>{t("Register")}</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/login'>{t("Login")}</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/profile'>{t("My profile")}</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/comments'>{t("Comments")}</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/table'>{t("Table")}</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/maps'>{t("Maps")}</NavLink></li>
      <Suspense fallback="loading">
          <div className="Lang">
            <ChangeFontSize />
            <DropdownLanguage />
          </div>
      </Suspense>
    </ul>
  </nav>
  );
  };

const Home = () => (
  <div className='home'>

  </div>




);

const Login = () => (
  <LoginForm />
);

const Register = () => (
  <RegistrationForm />
);

const Profile = () => (
  <ProfileView />
);

const Comments = () => (
  <CommentsView />
);

const Table = () => (
  <TableView />
);

const Maps = () => (
  <MapsView />
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/register' component={Register}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/profile' component={Profile}></Route>
    <Route exact path='/comments' component={Comments}></Route>
    <Route exact path='/table' component={Table}></Route>
    <Route exact path='/maps' component={Maps}></Route>
  </Switch>
);



export default App;
