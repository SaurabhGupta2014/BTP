// @flow
import * as React from "react";
import "../card/Card.css";

const Card = (props) => {
  return (
    <div>
      <div
        class="card border"
        style={{ padding: "10px", width: "50vh", minHeight: "250px" }}
      >
        <div class="card-body d-flex flex-column" style={{ marginTop: "30px" }}>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.desc}</p>
          <div className="cardButton">
            <button type="button" class="btn">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
