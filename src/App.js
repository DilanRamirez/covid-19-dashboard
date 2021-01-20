import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import getRandom from "./api";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";

//icons
import ConfirmedIcon from "./assets/icons/confirmed.png";
import RecoveredIcon from "./assets/icons/recovered.png";
import DeathIcon from "./assets/icons/death.png";

//css
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import SearchBar from "./components/Search-Bar/SearchBar";
import TopCard from "./components/Top-Cards/TopCard";

function App() {
  return (
    <div className="App">
      {/* SearchBar */}
      <SearchBar />

      <Container fluid={true} className="container-cards">
        <div className="top_section">
          <h2 className="top_section_title">Global Statistics</h2>
          <div className="top_card_container">
            <TopCard
              icon={RecoveredIcon}
              title={"Recovered"}
              value={"52923543"}
              update={"2021-01-20T"}
              color={"#56f1bf"}
            />
            <TopCard
              icon={ConfirmedIcon}
              title={"Confirmed"}
              value={"96097101"}
              update={"2021-01-20T"}
              color={"#ff9e26"}
            />

            <TopCard
              icon={DeathIcon}
              title={"Deaths"}
              value={"2054218"}
              update={"2021-01-20T"}
              color={"#ff2b2b"}
            />
          </div>
        </div>
        <div className="middle_section">
          <div className="graph1"></div>
          <div className="graph2"></div>
          <div className="graph3"></div>
        </div>
      </Container>
    </div>
  );
}

export default App;
