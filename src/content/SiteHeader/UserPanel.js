import React, { Component, Fragment } from "react";
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
        return (
            <UserContext.Consumer>
                {({ auth, setAuth }) => (
                    <Fragment>
                        {
                            (
                                auth.keycloak == null && auth.authenticated == false &&
                                <Switcher>
                                    <SwitcherItem>
                                        <Button href="/dashboard">
                                            Sign in to your account
                                        </Button>
                                    </SwitcherItem>
                                </Switcher>

                            )
                        }
                    </Fragment>
                )}
            </UserContext.Consumer>
        );
    }
}

export default UserPanel;
