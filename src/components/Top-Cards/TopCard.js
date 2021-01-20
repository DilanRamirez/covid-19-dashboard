import React from "react";
import CountUp from "react-countup";

import "./top-card.css";

function TopCard({ icon, title, value, update, color }) {
  return (
    <div
      className="card_top_container"
      style={{ borderBottom: `6px solid ${color}` }}
    >
      <div className="card_top_content">
        <img className="card_img" src={icon} />
        <p className="card_content_title">{title}</p>
        <p className="card_content_value">
          <CountUp start={0} end={value} duration={2.75} separator="," />{" "}
        </p>
        <p className="card_content_update">{update}</p>
      </div>
    </div>
  );
}

export default TopCard;
