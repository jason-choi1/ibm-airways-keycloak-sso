import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import { Button } from "carbon-components-react";
import { Content } from "carbon-components-react/es/components/UIShell";
import SiteHeader from "./components/SiteHeader";
import LandingPage from "./content/LandingPage";
import RepoPage from "./content/RepoPage";
import DashboardPage from "./content/DashboardPage";
import Welcome from './Welcome';

class App extends Component {

    render() {
        return (
            <>
                <SiteHeader />
                <Content>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/repos" component={RepoPage} />
                        <Route path="/dashboard" component={DashboardPage} />
                    </Switch>
                </Content>
            </>
        );
    }
}
export default App;
