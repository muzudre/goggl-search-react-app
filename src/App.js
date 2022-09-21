import React, { useState } from 'react'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { MainRoutes } from './components/Routes'

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <MainRoutes />
                <Footer />
            </div>
        </div>
    )
}

export default App