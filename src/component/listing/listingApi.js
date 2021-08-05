import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import RoomFilter from '../filters/roomFilter'

const url = " https://developerfunnel.herokuapp.com/hotels"

class ListingApi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hotellist: ''
        }
    }

    render() {

        return (
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter />
                </div>
                <div className="col-md-10">
                    <ListingDisplay listdata={this.state.hotellist} />
                </div>
            </div>

        )
    }

    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ hotellist: data })
            })
    }
    // componentDidMount() {
    //     let tripId = this.props.match.params.id;
    //     console.log(tripId);
    //     sessionStorage.setItem('tripId', tripId)
    //     axios.get(`${url}/${tripId}`)
    //         .then((res) => {
    //             this.setState({ hotellist: res.data })
    //             console.log(res.data);
    //         })

    //         .catch((err) => { console.log(err) })
    // }
}

export default ListingApi;