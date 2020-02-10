import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addBookingId } from "../../redux/action";
function Confirm(props) {
  let query = new URLSearchParams(props.location.search);
  let id = query.get("id");
  let bookingId = query.get("bookingId");
  addBookingId(bookingId);
  return (
    <div>
      <h2>Confirmation Page</h2>
      <p>We have confiremd your room of id: {id}</p>
      <p>Redirecting to Home Page...</p>
      {setTimeout(
        () => (
          <Redirect to="/" />
        ),
        5000
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.rooms
  };
};

export default connect(mapStateToProps, { addBookingId })(Confirm);
