import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { atHome } from "../../redux/action";
import Card from "./Card";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floorFilter: "all"
    };
    this.displayData = this.props.data;
  }

  componentWillUnmount() {
    localStorage.setItem("meeting", JSON.stringify(this.props.data));
  }

  priceAsc = () => {
    let temp = this.displayData.sort((a, b) => a.price - b.price);
    this.setState({
      data: temp
    });
  };
  priceDsc = () => {
    let temp = this.displayData.sort((a, b) => b.price - a.price);
    this.setState({
      data: temp
    });
  };
  capacityAsc = () => {
    let temp = this.displayData.sort((a, b) => a.capacity - b.capacity);
    this.setState({
      data: temp
    });
  };
  capacityDsc = () => {
    let temp = this.displayData.sort((a, b) => b.capacity - a.capacity);
    this.setState({
      data: temp
    });
  };

  filterData = e => {
    this.setState({
      floorFilter: e.target.value
    });
  };
  render() {
    this.props.atHome();
    // filter logic
    this.displayData = this.props.data;
    if (this.state.floorFilter != "all") {
      this.displayData = this.props.data.filter(
        ele => ele.floor === Number(this.state.floorFilter)
      );
      console.log(this.displayData);
    }
    // pagination logic
    let resultPerPage = 5; //given
    let totalPages = Math.ceil(this.displayData.length / resultPerPage);
    let query = new URLSearchParams(this.props.location.search);
    let currPage = query.get("page") || 1;
    if (totalPages == 1) currPage = 1;
    let prevPageEnd = (currPage - 1) * resultPerPage;
    let currPageEnd = currPage * resultPerPage;
    let currPageItems = [];
    for (let i = prevPageEnd; i < currPageEnd; i++) {
      if (this.displayData[i]) currPageItems.push(this.displayData[i]);
      else break;
    }
    console.log(currPageItems);
    // for pagelink nav
    let pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return (
      <div>
        <h1>Home Page</h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-1">Pages</div>
            <div className="col-5">
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
            <div className="col-2">
              <div className="row">
                <div className="col-4">Price</div>
                <div className="col-2">
                  <button className="btn btn-primary" onClick={this.priceAsc}>
                    <i class="fas fa-sort-up"></i>
                  </button>
                </div>
                <div className="col-2">
                  <button className="btn btn-primary" onClick={this.priceDsc}>
                    <i class="fas fa-sort-down"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="row">
                <div className="col-5">Capacity</div>
                <div className="col-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.capacityAsc}
                  >
                    <i class="fas fa-sort-up"></i>
                  </button>
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.capacityDsc}
                  >
                    <i class="fas fa-sort-down"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="row">
                <div className="col-3">Floor</div>
                <div className="col-9">
                  <select
                    name="floor"
                    className="custom-select"
                    onChange={this.filterData}
                  >
                    <option value="all">all</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
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

const mapDispatchToProps = dispatch => {
  return {
    atHome: () => dispatch(atHome())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
