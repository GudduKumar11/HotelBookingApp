import React, { Component } from 'react'
import './Search.css';
const cityUrl = " https://developerfunnel.herokuapp.com/location";
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city=";
class Search extends Component {
    constructor() {
        super()
        // console.log("In constructure.")
        this.state = {
            location: '',
            hotels: ''
        }
    }
    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )

            })
        }
    }
    renderHotels = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )

            })
        }
    }
    handleCity = (event) => {
        // console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${hotelUrl}${cityId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ hotels: data });
            })

    }
    render() {
        // console.log("In render.")
        return (
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us.
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity} >
                        <option>---------SELECT CITY--------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="hotelDropDown" >
                        <option>---------SELECT HOTELS--------</option>
                        {this.renderHotels(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }
    //on page  load call api

    componentDidMount() {
        // console.log("In Didmount.")
        // we get the data and update the  state 
        fetch(cityUrl, { method: 'GET' })
            //return the promise headers
            .then((res) => res.json())
            // get the data 
            .then((data) => {
                //fetching data in state
                this.setState({ location: data })
            })
            //err handling
            .catch((err) => {
                console.log(err)
            })
    }
}
export default Search;