'use strict'

// var React = require('react')// sem usar ./ procura direto no node_modules
import React from 'react'

const App = React.createClass({
    render: function () {
        // apos instalar o preset do react no babel nao precisamos mais utilizar o createElement
        // return React.createElement('h1', null, 'Título')
        return <div>Aplicação</div>
    }
})

// module.exports = Title

// export padrao ES2015
export default App
