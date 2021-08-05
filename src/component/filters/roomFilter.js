import React, { Component } from 'react'
import axios from 'axios'
const url = "https://developerfunnel.herokuapp.com/hotellist/4?roomtype=1"

class RoomFilter extends Component {
    render() {
        return (
            <div className="container">
                <h2>Room Filter</h2>
            </div>
        )
    }
}
export default RoomFilter;