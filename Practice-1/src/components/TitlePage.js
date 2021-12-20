import React, {Component, Fragment} from 'react';

class TitlePage extends Component {
    constructor(props) {
        super();
        this.state={
            pageTitle:props.title
        }
    }

    render() {
        return (
            <Fragment>
                <title>{ this.state.pageTitle }</title>
            </Fragment>
        );
    }
}

export default TitlePage;