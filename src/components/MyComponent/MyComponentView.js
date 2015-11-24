import React from 'react';
import {Link} from 'react-router';

export default class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <div>Hello, world! {this.props.params.test}</div>
                <Link to="/about/test">clicky me.</Link>
            </div>
        );
    }

}

MyComponent.displayName = 'MyComponent';

MyComponent.propTypes = {
    params: React.PropTypes.object,
};

MyComponent.defaultProps = {
    params: {},
};
