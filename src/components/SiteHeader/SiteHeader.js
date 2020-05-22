import React from "react";
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
    SkipToContent,
} from "carbon-components-react/es/components/UIShell";
const SiteHeader = () => (
    <Header aria-label="Airways">
        <SkipToContent />
        <HeaderName element={Link} to="/" prefix="IBM">
            Airways
        </HeaderName>
        <HeaderMenuItem element={Link} to="/repos">
            Repositories
        </HeaderMenuItem>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
                <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
                <UserAvatar20 />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
    </Header>
);
export default SiteHeader;
