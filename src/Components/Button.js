import React, { Component } from "react";

class Tombol extends Component {
  render() {
    return (
      <div className="container-button">
        <div className="button">
          <button type="button" class="btn btn-primary">primary </button>
          <button type="button" class="btn btn-secondary">secondary </button>
          <button type="button" class="btn btn-success">success </button>
          <button type="button" class="btn btn-danger">danger </button>
          <button type="button" class="btn btn-warning">warning </button>
          <button type="button" class="btn btn-info">info </button>
          <button type="button" class="btn btn-light">light </button>
          <button type="button" class="btn btn-dark">dark </button>
        </div>
      </div>
    )
  }
}

export default Tombol;