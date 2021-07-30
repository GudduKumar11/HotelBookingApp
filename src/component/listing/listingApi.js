import React, { Component } from 'react'
import axios from 'axios'
import ListingDisplay from './listingDisplay'
const url = "https://developerfunnel.herokuapp.com/hotelsdetails/1";

class Listing extends Component {
    constructor() {
        super()
        this.state = {
            hotellist: ''
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    Filter
                </div>
                <div className="col-md-10">
                    <ListingDisplay />
                </div>
            </div>
        )
    }
    // componentDidMount() {
    //     fetch(url, { method: 'GET' })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             this.setState({ tripType: data })
    //         })
    // }
    componentDidMount() {
        let tripId = this.props.match.params.id;
        axios.get(`${url}/{trip}`)
            .then((res) => { this.setState({ hotellist: res.data }) })

    }
}
export default Listing;