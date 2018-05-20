import React, { Component } from 'react';
import Router from './router'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import {ThemeProvider} from 'styled-components';
import theme from './theme';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
    render() {
		return (
            <div>
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <ThemeProvider theme={theme}>
                        <Router/>
                    </ThemeProvider>
                </Provider>
            </div>
		);
    }
}

export default App;