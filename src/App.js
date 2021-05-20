import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export class App extends Component {
  state = {
    FullName: "Sakka Ines",
    Bio: "25 ans , kairouan",
    Profession: "développeur",
    imageSrc: "/photo.jpg",
    show: false,
    comp: 0,
  };

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({ comp: this.state.comp + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="div">
        <Button
          className="btn"
          variant="outline-secondary"
          onClick={this.handleShow}
        >
          {this.state.show ? "Hide" : "Show"}
        </Button>
        {this.state.show ? (
          <div>
            <h3>{this.state.comp}</h3>
            <h1>{this.state.FullName}</h1>
            <img
              src={this.state.imageSrc}
              alt={this.state.FullName}
              className="pic"
            />
            <p>{this.state.Bio}</p>
            <p>{this.state.Profession}</p>
          </div>
        ) : (
          <h5>"clicker sur le button pour afficher le profile "</h5>
        )}
      </div>
    );
  }
}

export default App;
