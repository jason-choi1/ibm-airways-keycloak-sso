import React, { Component } from 'react';

class UserInfo extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            id: ""
        };
    }

    componentDidMount() {
        this._isMounted = true;    
        this.props.keycloak.loadUserInfo().then(userInfo => {
            this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
        });
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }
        
    render() {
        return (
                <div className="UserInfo">
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>ID: {this.state.id}</p>
                </div>
        );
    }
}

export default UserInfo;
