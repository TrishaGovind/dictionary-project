import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-1">
          <a
            href={props.phonetic.audio}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            &#9654;
          </a>
        </div>
        <div className="col pt-3 ps-3 text">{props.phonetic.text}</div>
      </div>
    </div>
  );
}
