import { connect } from "react-redux";
import Main from "./Main";

function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}
var increaseAction = { type: "Increase" };

function mapDispatchToProps(dispatch) {
     return {
         increaseCount: function() { 
            return dispatch(increaseAction);
         }
     };
}
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default connectedComponent;