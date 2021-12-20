import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";
import NavePage from "../components/navePage";
import TitlePage from "../components/TitlePage";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TitlePage title="Contact"/>
                <NavePage/>
                <h1>This is a Contact</h1>
            </Fragment>
        );
    }
}

export default ContactPage;