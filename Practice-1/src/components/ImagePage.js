import React, {Component, Fragment} from 'react';
class ImagePage extends Component {
    constructor(props) {
        super();
        this.state={
            imageValu:props.img,
        }
    }

    render() {
        return (
            <Fragment>
                <img className="imageStyle" src={this.state.imageValu}/>
            </Fragment>
        );
    }
}

export default ImagePage;