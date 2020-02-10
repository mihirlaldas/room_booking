import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={props.data.image}
          alt="meeting avatar"
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">Price: {props.data.price}</p>
          <p className="card-text">Floor: {props.data.floor}</p>
          <p className="card-text">Capacity: {props.data.capacity}</p>
          <p className="card-text">
            Availabe:{props.data.available ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}
