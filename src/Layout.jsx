import React from 'react'
import injectContext from './store/AppContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import './styles/global.scss'

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(Layout)