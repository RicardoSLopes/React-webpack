'use strict'

// padrao ES2015
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

// var React = require('react')
// var ReactDOM = require('react-dom')
// var Title = require('./app')
const renderApp = (NextApp) => { 
// ReactDOM.render(
    render(
        // apos instalar o preset do react no babel nao precisamos mais utilizar o createElement
        // React.createElement(Title),
        <AppContainer>
            <NextApp/>
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
} 

renderApp(App)

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        renderApp(NextApp)
    })
}
