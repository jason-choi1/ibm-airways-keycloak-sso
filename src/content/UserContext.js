import React from 'react';
export const UserContext = React.createContext({
    auth: {
        keycloak: null,
        authenticated: false
    },
    setAuth: () => {}
});
