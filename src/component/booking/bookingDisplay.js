import React from 'react'

const BookingDisplay = (props) => {
    const renderTable = ({ bookdata }) => {
        console.log(bookdata);
        if (bookdata) {
            return bookdata.map((item) => {
                console.log(item)
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.cost}</td>

                    </tr>
                )
            })
        }
    }

    return (
        <div className="container">
            <center> <h2>Booking List</h2></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Hotel</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingDisplay
