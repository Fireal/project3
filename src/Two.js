import React, { Component } from "react";

class Two extends Component {
    render () {
        return (
            <div>
            <h1>Honey</h1>
            <h2>Bailey Bridgewater</h2>
            <div>
            <p>{this.props.matchString}</p>
            </div> 
            </div>
        );
    }
}
export default Two;