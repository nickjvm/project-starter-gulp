import React from 'react';

export default class MyComponent extends React.Component {

    render() {
        return <div>Hello, world!</div>;
    }

}

MyComponent.displayName = 'MyComponent';

MyComponent.propTypes = {
    test: React.PropTypes.string,
};
