# IBM Airways
A sample application developed with ReactJS and Carbon Design System components to demonstrate integration with and usage of Keycloak SSO.
![IBM Airways LandingPage](https://github.com/jason-choi1/ibm-airways-keycloak-sso/blob/master/supplements/ibm_airways_landingpage.PNG)

## Setup
### Dependencies
`npm install` to install all project dependencies

### Create a Keycloak SSO Client
Follow the [user guide](https://www.keycloak.org/docs/latest/server_admin/#_clients) to create a Keycloak SSO client. 
At minimum, your client settings should resemble the following:
![Keycloak SSO Client Config](https://github.com/jason-choi1/ibm-airways-keycloak-sso/blob/master/supplements/keycloak_sso_client_config.PNG)

Set the desired authentication flow to be used with the client
![Keycloak SSO Client Auth Flow](https://github.com/jason-choi1/ibm-airways-keycloak-sso/blob/master/supplements/keycloak_sso_client_auth_flow.PNG)

Generate a keycloak.json file and place it into `<root_dir>/public/keycloak.json`
![Keycloak SSO Client JSON](https://github.com/jason-choi1/ibm-airways-keycloak-sso/blob/master/supplements/keycloak_sso_client_oidc_json.PNG)

Start the application 
`npm start` and access on [http://localhost:3000](http://localhost:3000)

## Testing Keycloak SSO
"Sign in to your account" should redirect the user to the Keycloak SSO page that was configured
![Keycloak SSO Login Page](https://github.com/jason-choi1/ibm-airways-keycloak-sso/blob/master/supplements/keycloak_sso_login_page.PNG)

## Available Scripts
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm stop`
Stops the app and kill the node process

## Point of Contact
Jason Choi: <jason.choi1@ibm.com>

## License
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
