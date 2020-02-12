import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addBookingId, timer, setAvailable } from "../../redux/action";
class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      bookingId: ""
    };
  }
  componentDidMount() {
    let query = new URLSearchParams(this.props.location.search);
    let id = query.get("id");
    let bookingId = query.get("bookingId");
    this.props.addBookingId(bookingId);
    this.props.setAvailable(id);
    this.setState({
      id: id,
      bookingId: bookingId
    });
  }
  render() {
    return (
      <div>
        <h2>Confirmation Page</h2>
        <p>We have confiremd your room of id: {this.state.id}</p>
        <p>Redirecting to Home Page...</p>
        {this.props.timer()}
        {this.props.toHome ? <Redirect to="/" /> : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.rooms,
    toHome: state.toHome
  };
};

const mapDispathToProps = dispatch => {
  return {
    addBookingId: bookingId => dispatch(addBookingId(bookingId)),
    setAvailable: id => dispatch(setAvailable(id)),
    timer: () => dispatch(timer())
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Confirm);
