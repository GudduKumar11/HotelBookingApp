import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from "./component/Home/Home"
import ListingApi from "./component/listing/ListingApi"
import Details from "./component/Details/Details"
const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/list/:id" component={ListingApi} />
            <Route path="/details/:id" component={Details} />
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;