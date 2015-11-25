import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as Actions from './MyComponentActions';

export class MyComponent extends React.Component {

    onSetNameClick() {
        let name = prompt('What is your name?'); // eslint-disable-line no-undef

        this.props.setName(name);
    }

    render() {
        let { path, name } = this.props;

        return (
            <div>
                <h1>Hello, {name}!</h1>
                <p>Your current path is: {path}</p>
                <p display-if={this.props.params.test}>Value from route params: {this.props.params.test}</p>
                <button onClick={()=>this.onSetNameClick()}>Set your name</button>

                <p><Link to="/about/test">lets go places</Link>.</p>
            </div>
        );
    }

}

MyComponent.displayName = 'MyComponent';

MyComponent.propTypes = {
    setName: PropTypes.func.isRequired,
    params: PropTypes.object,
    path: PropTypes.string,
    name: PropTypes.string,
};

MyComponent.defaultProps = {
    params: {},
};

function mapStateToProps(state) {
    return {
        path: state.router.location.pathname,
        name: state.myComponent.name,
    };
}

export default connect(mapStateToProps, Actions)(MyComponent);
