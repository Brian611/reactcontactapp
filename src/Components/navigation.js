import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Nav extends Component {

    render() {
        const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
                <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
            )} />
        );
        return (
            <div className="ui secondary pointing menu">
                <ActiveLink activeOnlyWhenExact to="/home" label="Home" />
                <ActiveLink activeOnlyWhenExact to="/user" label="user" />
                <ActiveLink activeOnlyWhenExact to="/contacts" label="contacts" />
            </div>
        );
    }
}

export default Nav;