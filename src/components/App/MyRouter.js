import React, {Component, PropTypes} from 'react';
import { Router, Route, Link }from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';


import MyComponent from '../MyComponent/MyComponentView';

export default class MyRouter extends Component {

    render() {

        let history = createBrowserHistory();

        return (
            <Router location="history" history={history}>
                <Route path="/" component={MyComponent}>
                    <Route path="about" component={MyComponent}/>
                    <Route path="about/:test" component={MyComponent}/>
                    {/*<Route path="*" component={NoMatch}/>*/}
                </Route>

            </Router>
        );
    }
}

MyRouter.displayName = 'MyRouter';

MyRouter.propTypes = {
    component: PropTypes.element,
};
