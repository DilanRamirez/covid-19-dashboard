import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import getRandom from "./api";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import SearchBar from "./components/Search-Bar/SearchBar";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        {/* 
        <input type="checkbox" name="theme">
          Theme
        </input> */}
      </div>
    </nav>
  );
};

function App() {
  // const [Meal, setMeal] = useState("")
  // const [MealThumb, setMealThumb] = useState("")
  // const [Instructions, setInstructions] = useState("")
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await getRandom();
  //     console.log(response)
  //     setMeal(response.strMeal)
  //     setMealThumb(response.strMealThumb[0])
  //     setInstructions(response.strInstructions[0])
  //   };
  //   getData();
  // }, []);

  // let check = document.querySelector("input[name=theme]");
  // console.log(check);
  // check.addEventListener("change", function () {
  //   if (this.checked) {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   } else {
  //     document.documentElement.setAttribute("data-theme", "light");
  //   }
  // });

  return (
    <div className="App">
      {/* <NavBar /> */}
      <SearchBar />

      <Container fluid={true} className="container-cards">
        <Row>
          <Col sm className="top-left">
            <div className="card">
              <div className="content">
                <h1>Welcome</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </Col>
          <Col className="top-right">
            <div className="card">top-right</div>
          </Col>
        </Row>
        <Row>
          <Col sm className="middle-left">
            <div className="card">middle-left</div>
          </Col>
          <Col sm className="middle-center">
            <div className="card">middle-center</div>
          </Col>
          <Col sm className="middle-right">
            <div className="card">middle-right</div>
          </Col>
        </Row>
        <Row>
          <Col sm className="bottom-left">
            <div className="card">top-left</div>
          </Col>
          <Col sm className="bottom-right">
            <div className="card">top-right</div>
          </Col>
        </Row>
        <Row>
          <Col sm className="bottom">
            <div className="card">bottom</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
