import React, { Component, Fragment } from "react";
import { InlineLoading } from "carbon-components-react";
import Keycloak from 'keycloak-js';
//import UserInfo from './UserInfo';
//import Logout from './Logout';
import MyFlights from "./MyFlights";

class DashboardPage extends Component {

    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state = {
            keycloak: null,
            authenticated: false,
            name: "",
            email: ""
        };
    }
    
    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({onLoad: 'login-required'})
                .then(authenticated => {
                    this.setState({ keycloak: keycloak, authenticated: authenticated });
                    this.state.keycloak.loadUserInfo().then(user => {
                        this.setState({ name: user.name, email: user.email });
                    });
                },err => {
                    
                })
                .catch(err => {
                    
                });
    }
    
    render() {
        if(this.state.keycloak) {
            if(this.state.authenticated) {
                return (
                    <Fragment>
                        <div className="bx--row dashboard-page__banner">
                            <div className="bx--col-lg-16">
                                <h1 className="dashboard-page__heading">
                                    Welcome back, {this.state.name}
                                </h1>
                            </div>
                        </div>
                        <br/>
                        <div className="bx--row">
                            <div className="bx--col-md-4 bx--col-lg-7">
                                <MyFlights />
                            </div>
                            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                                <h2 className="dashboard-page__subheading">
                                    Membership Status
                                </h2>
                            </div>
                        </div>
                    </Fragment>
                );
            } else return (<div>Unable to authenticate!</div>);
        }
        return (
            <div className="dashboard-page__centered">
                <InlineLoading description="Redirecting to your identity provider..." />
            </div>
        );
    }
};

export default DashboardPage;
