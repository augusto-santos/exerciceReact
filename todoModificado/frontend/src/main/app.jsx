import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../Template/custom.css'

import React from 'react'
import Routes from './routes'
import Header from '../components/Header'

export default props => (
    <div className="container">
        <Header />
        <Routes />
    </div>
)