import React, { Component, Fragment, useContext} from "react";
import { useHistory } from "react-router-dom";
import {
    Button,
    Switcher,
    SwitcherItem,
    SwitcherItemLink
} from "carbon-components-react";
import { UserContext } from "../UserContext";

class UserPanel extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <UserPanelContent />;
    }
}

function UserPanelContent() {
    const user = useContext(UserContext);
    const history = useHistory();

    function logout() {
        history.push("/");
        user.auth.keycloak.logout();
    }
    return (
        <Fragment>
            {
                (
                    user.auth.keycloak === null && user.auth.authenticated === false &&
                    <Switcher aria-label="User Panel">
                        <Button href="/dashboard">
                            Sign in to your account
                        </Button>
                    </Switcher>
                    
                ) ||
                (
                    user.auth.keycloak != null && user.auth.authenticated === true &&
                    <Switcher aria-label="User Panel">
                        <SwitcherItem aria-label="Logged in name">
                            Logged in as {user.auth.name}
                        </SwitcherItem>
                        <SwitcherItem aria-label="Logged in email">
                            {user.auth.email}
                        </SwitcherItem>
                        <SwitcherItem aria-label="Log out button" onClick={() => logout()}>
                            Log out
                        </SwitcherItem>
                    </Switcher>
                )
            }
        </Fragment>
    );
}

export default UserPanel;
