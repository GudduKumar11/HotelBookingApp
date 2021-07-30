import React from 'react'
import './QuickSearch.css'
import { Link } from 'react-router-dom';
const QuickDisplay = (props) => {
    const listTrip = ({ tripdata }) => {
        if (tripdata) {
            return tripdata.map((item) => {
                return (
                    <Link to={`/list/${item._id}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image} />
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading " >
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start {item.name} trip with us.
                                    Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return (
        <div className="quickSearchContainer">
            <p className="quickSearchHeading ">
                Qicck Search
            </p>
            <p className="quickSearchSubHeading ">
                Discove the trip.
            </p>
            <br />
            {listTrip(props)}
        </div>
    )
}

export default QuickDisplay
