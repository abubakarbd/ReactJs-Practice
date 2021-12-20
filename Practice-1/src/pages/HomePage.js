import React, {Component, Fragment} from 'react';
import NavePage from "../components/navePage";
import TitlePage from "../components/TitlePage";
import ImagePage from "../components/ImagePage";
import Img1 from '../assets/images/banar.jpg'
class HomePage extends Component {

    render(){
        return (
            <Fragment>
                <TitlePage title="Home"/>
                <NavePage/>

                <h1>This is a Home Page</h1>
                <ImagePage img={Img1}/>
            </Fragment>
        );
    }
}
export default HomePage;