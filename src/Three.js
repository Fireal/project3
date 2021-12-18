import React, { Component } from "react";

class Three extends Component {
    render () {
        return (
            <div>
            <h1>A Gray Inchworm on a Gray Sidewalk</h1>
            <h2>Michelle Ross</h2>
            <div>
            <p>{this.props.matchString}</p>
            </div> 
            </div>
        );
    }
}
export default Three;