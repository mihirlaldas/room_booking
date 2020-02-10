import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
export class Booking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let query = new URLSearchParams(this.props.location.search);
    let id = query.get("id");
    const details = this.props.data.find(ele => ele.id === Number(id));
    console.log(details, id);
    let bookingId = id + "b01";

    return (
      <div>
        <h2>Are you sure, you want to book this room?</h2>
        <div className="container">
          <p>Booking id: {bookingId}</p>
          <div className="m-auto w-25">
            <Card data={details} />
          </div>
        </div>
        <Link
          to={`/confirm?bookingId=${bookingId}&id=${id}`}
          className="btn btn-primary"
        >
          Confirm
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.rooms
  };
};
export default connect(mapStateToProps)(Booking);
