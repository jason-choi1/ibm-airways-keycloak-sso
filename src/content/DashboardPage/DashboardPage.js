import React, { Component, Fragment, useContext } from "react";
import { InlineLoading } from "carbon-components-react";
import Keycloak from 'keycloak-js';
import { UserContext } from "../UserContext";
import MyFlights from "./MyFlights";

class DashboardPage extends Component {
    static contextType = UserContext;
    
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const context = this.context;
        if (!context.auth.authenticated) {
            const keycloak = Keycloak('/keycloak.json');
            keycloak.init({onLoad: 'login-required'})
                    .then(authenticated => {
                        context.auth.keycloak = keycloak;
                        context.auth.authenticated = authenticated;
                        keycloak.loadUserInfo().then(user => {
                            context.auth.name = user.name;
                            context.auth.email = user.email;
                            context.setAuth(context.auth);
                        });
                    },err => {
                        
                    })
                    .catch(err => {
                        
                    });
        }
    }
    
    render() {
        return <DashboardPageContent />;
    }
};

function DashboardPageContent() {
    const user = useContext(UserContext);
    if (user.auth.keycloak) {
        if (user.auth.authenticated) {
            return (
                <Fragment>
                    <div className="bx--row dashboard-page__banner">
                        <div className="bx--col-lg-16">
                            <h1 className="dashboard-page__heading">
                                Welcome back, {user.auth.name}
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
        } else {
            return (<div>Unable to authenticate!</div>);
        }
    }
    return (
        <div className="dashboard-page__centered">
            <InlineLoading description="Authenticating to your identity provider..." />
        </div>
    );
}

export default DashboardPage;
