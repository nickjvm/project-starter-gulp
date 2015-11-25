import React, { PropTypes } from 'react';
import { Route }from 'react-router';
import { createStore, compose, combineReducers } from 'redux';
import { createHistory } from 'history';
import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-router';
import Components from './Components';
import Reducers from './Reducers';
import { Provider } from 'react-redux';

export default function App() {

    const reducer = combineReducers({
      router: routerStateReducer,
      ...Reducers,
    });

    const store = compose(
      reduxReactRouter({ createHistory })
    )(createStore)(reducer);

    return (
        <Provider store={store}>
            <ReduxRouter>
                <Route path="/" component={Components.MyComponent}>
                    <Route path="about" component={Components.MyComponent}/>
                    <Route path="about/:test" component={Components.MyComponent}/>
                    {/*<Route path="*" component={NoMatch}/>*/}
                </Route>
            </ReduxRouter>
        </Provider>
    );
}

App.displayName = 'App';

App.propTypes = {
    component: PropTypes.element,
};
