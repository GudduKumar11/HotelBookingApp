import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// import Home from './Home'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand" >Developer Funel</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
