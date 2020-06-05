import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderPanel,
    SkipToContent,
} from "carbon-components-react/es/components/UIShell";
import UserPanel from "./UserPanel";

class SiteHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {isClicked: false};
        this.userPanelProps = {
            expanded: false
        }
    }

    handleClick() {
        this.setState(state => ({
            isClicked: !state.isClicked
        }));
        this.userPanelProps.expanded = !this.state.isClicked;
    }

    render() {
        return (
            <Header aria-label="Airways">
                <SkipToContent />
                <HeaderName element={Link} to="/" prefix="IBM">
                    Airways
                </HeaderName>
                <HeaderMenuItem element={Link} to="/repos">
                    Repositories
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/dashboard">
                    Dashboard
                </HeaderMenuItem>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Notifications">
                        <Notification20 />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="User Avatar">
                        <UserAvatar20 onClick={this.handleClick.bind(this)} />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
                <HeaderPanel {...this.userPanelProps} style={{bottom: "75%"}} aria-label="User Avatar Panel">
                    <UserPanel />
                </HeaderPanel>
            </Header>
        );
    }
}
export default SiteHeader;
