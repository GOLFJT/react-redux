import React from 'react'
import FirstTab from '../containers/FirstTab'
import SecondTab from '../containers/SecondTab'
import './../style.css'

const App = () => (
    <div className="flex-box">
        <FirstTab />
        <SecondTab />
    </div>
)

export default App