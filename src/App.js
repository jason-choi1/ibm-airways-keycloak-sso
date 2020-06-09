import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import { Content } from "carbon-components-react/es/components/UIShell";
import { UserContext } from "./content/UserContext";
import SiteHeader from "./content/SiteHeader";
import LandingPage from "./content/LandingPage";
import DashboardPage from "./content/DashboardPage";
import ApplicationPage from "./content/ApplicationPage";

class App extends Component {
    setAuth = (auth) => {
        this.setState({ auth });
    }

    state = {
        auth: {
            keycloak: null,
            authenticated: false,
            name: null,
            email: null
        },
        setAuth: this.setAuth
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <Fragment>
                    <SiteHeader />
                    <Content>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route path="/dashboard" component={DashboardPage} />
                            <Route path="/application" component={ApplicationPage} />
                        </Switch>
                    </Content>
                </Fragment>
            </UserContext.Provider>
        );
    };
};

export default App;
