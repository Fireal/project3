import React, { Component } from "react";

class One extends Component {
    render () {
        return (
            <div>
            <h1>When the Solid Gives Way</h1>
            <h2>Kathleen Latham</h2>
            <div>
            <p>{this.props.matchString}</p>
            </div> 
            </div>
        );
    }
}
export default One;