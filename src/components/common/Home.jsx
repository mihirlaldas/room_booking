import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadData } from "../../redux/action";
import Card from "./Card";
export class Home extends Component {
  componentDidMount() {
    let data = localStorage.getItem("meeting");
    if (data !== undefined) loadData(data);
  }
  render() {
    let resultPerPage = 5; //given
    let totalPages = Math.ceil(this.props.data.length / resultPerPage);
    let query = new URLSearchParams(this.props.location.search);
    let currPage = query.get("page") || 1;
    let prevPageEnd = (currPage - 1) * resultPerPage;
    let currPageEnd = currPage * resultPerPage;
    let currPageItems = [];
    for (let i = prevPageEnd; i < currPageEnd; i++)
      currPageItems.push(this.props.data[i]);
    console.log(currPageItems);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return (
      <div>
        <h1>Home Page</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-2">Pages</div>
            <div className="col-8">
              <ul className="pagination">
                {pages.map(ele => (
                  <li className="page-item" key={ele}>
                    <Link to={`/?page=${ele}`} className="page-link">
                      {ele}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card-deck">
            {currPageItems.map(ele =>
              ele.available ? (
                <Link to={`/booking?id=${ele.id}`}>
                  <Card data={ele} key={ele.id} />
                </Link>
              ) : (
                <Card data={ele} key={ele.id} />
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.rooms
  };
};

export default connect(mapStateToProps, { loadData })(Home);
