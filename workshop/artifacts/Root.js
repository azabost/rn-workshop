import configureStore from './configureStore';
import Start from './Start/StartScreen';
import { Component } from 'react';
import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
const store = configureStore();
const RouterWithRedux = connect()(Router);
export default class Root extends Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(RouterWithRedux, null,
                React.createElement(Scene, { key: 'init', title: 'Start Screen', component: Start }))));
    }
}
//# sourceMappingURL=Root.js.map