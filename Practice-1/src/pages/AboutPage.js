import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";
import NavePage from "../components/navePage";
import TitlePage from "../components/TitlePage";
import ImagePage from "../components/ImagePage";
import Img2 from '../assets/images/background.jpg'

class AboutPage extends Component {
    constructor() {
        super();
        this.state={
            bol:false
        }
    }
    render(){
        return(
            <Fragment>
                <TitlePage title="About"/>
                <NavePage/>
                {this.state.bol ? "Hello Vaiya" : "No hello"}
                <h1>This is a About</h1>
                <ImagePage img={Img2}/>
            </Fragment>
        );
    }
}
export default AboutPage;