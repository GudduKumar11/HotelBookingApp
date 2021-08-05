import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: ''
        }
    }
    render() {
        // let details = this.state.details;
        let { details } = this.state;
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-13">
                                <img className="img-responsive" src={details.thumb} style={{ height: 400, width: 1500 }} />
                            </div>
                            <div className="col-md-6" >
                                <h3>{details.name}</h3>
                                <h4>{details.locality}</h4>
                                <h4>{details.address}</h4>
                            </div>
                        </div>
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Details</Tab>
                            <Tab>Contact.</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>{details.name}</h2>
                            <p>{details.name}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nemo eos laboriosam optio rem,
                                id eaque saepe quae? Unde eius expedita saepe quam quidem quas debitis inventore.
                                Cupiditate, saepe quas.
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <h4>{details.locality}</h4>
                            <h4>{details.address}</h4>
                            <h4>Phone: 9709884128</h4>
                        </TabPanel>
                    </Tabs>
                    <Link to="/" className="btn btn-danger">Back</Link> &nbsp;
                    <Link to={`/booking/${details.name}`} className="btn btn-success"> Process </Link>
                </div>
            </div>

        )
    }
    // componentDidMount() {
    //     let hotelId = this.props.match.params.id;
    //     fetch(`${url}/${hotelId}`, { method: 'GET' })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             this.setState({ details: data })
    //             console.log(data)
    //         })
    // }
    async componentDidMount() {
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({
            details: response.data[0]
        })
        sessionStorage.setItem('cost', response.data[0].cost)
    }

}

export default Details;