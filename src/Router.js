import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import JoinMission from './join-the-mission/JoinMission';
import LandingPage from './components/landingpage/LandingPage';


export class Router extends Component {
  render() {
    return (
      <>
        <Route component={JoinMission} path='/mission' />
        <Route path='/' component={LandingPage} />
      </>
    );
  }
}

export default Router;
