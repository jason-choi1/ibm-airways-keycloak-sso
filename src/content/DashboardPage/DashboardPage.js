import React, { Component } from "react";
import Keycloak from 'keycloak-js';
//import UserInfo from './UserInfo';
//import Logout from './Logout';


class DashboardPage extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }
  
  componentDidMount() {
      const keycloak = Keycloak('/keycloak.json');
      keycloak.init({onLoad: 'login-required'})
          .then(authenticated => {
              console.log("***********Setting state after auth");
              this.setState({ keycloak: keycloak, authenticated: authenticated });
          },err => {
              console.log("***********Caught error1: " + err);
          })
          .catch(err => {
              console.log("***********Caught error2: " + err);
          });
  }
    
  render() {
    console.log("*******************render()");
    if(this.state.keycloak) {
        if(this.state.authenticated) {
            return (
                <div>
                    Hello
                </div>
            );
        } else return (<div>Unable to authenticate!</div>);
    }
    return (
      <div>Redirecting to your identity provider...</div>
    );
  }
};


/*
const DashboardPage = () => {
    var state = { keycloak: null, authenticated: false };

    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
        state.keycloak = keycloak;
        state.authenticated = authenticated;
    })

    if (state.keycloak) {
        if(state.authenticated) {
            return (
                <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
                    <div className="bx--row repo-page__r1">
                        <div className="bx--col-lg-16">Dashboard will go here</div>
                    </div>
                </div>
            )
        }
    }
};
*/


export default DashboardPage;
