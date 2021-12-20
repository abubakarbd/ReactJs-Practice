import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import '../assets/css/style.css';

class NavePage extends Component {


    render() {
        return (
            <Fragment>
                <p className="linkColor">Visit Home Page : <Link activeStyle={{ color: '#00ffff' }} to="/">Click me</Link></p>
                <p className="linkColor">Visit About Page : <Link activeStyle={{ color: '#00ffff' }} to="/about">Click me</Link></p>
                <p className="linkColor">Visit Contact Page : <Link activeStyle={{ color: '#00ffff' }} to="/contact">Click me</Link></p>
            </Fragment>
        );
    }
}
export default NavePage;