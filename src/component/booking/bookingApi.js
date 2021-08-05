import React from 'react'
import axios from 'axios'
import BookingDisplay from './bookingDisplay'
const url = "http://localhost:8001/booking/";

class ViewBooking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            booking: ''
        }
    }
    render() {
        return (
            <BookingDisplay bookdata={this.state.booking} />
        )
    }
    componentDidMount() {
        axios.get(url).then((res) => {
            // console.log(res.data)
            this.setState({ booking: res.data })
        })
    }
}
export default ViewBooking;