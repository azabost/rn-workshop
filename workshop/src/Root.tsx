import configureStore from './configureStore'
import Start from './Start/StartScreen'
import { Component } from 'react'
import * as React from 'react'
import { Provider, connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'

const store = configureStore()
const RouterWithRedux = connect()(Router as any)

export default class Root extends Component<void, void> {

    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key='init' title='Start Screen' component={Start}/>
                </RouterWithRedux>
            </Provider>
        )
    }

}