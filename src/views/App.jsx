import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Content from '../components/layout/Content'

const App = props => (
    <div className="App">
        <BrowserRouter>             
            <Content />
        </BrowserRouter>
    </div>
)

export default App