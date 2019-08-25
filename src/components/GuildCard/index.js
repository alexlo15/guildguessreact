import React from "react";
import "./style.css";

const GuildCard = props =>(
    <div className="card col-sm-6 col-lg-3" onClick={props.guildClick}>
      <div className="img-container">
        <img id={props.name} alt={props.name} src={props.image} />
        <div class="centered">{props.name}</div>
      </div>
    </div>
);

export default GuildCard;
