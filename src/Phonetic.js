import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);
  const start = () => {
    audio.play();
  };

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <div className="row mb-2">
          <div className="col-1">
            <a href={Audio} onClick={start}>
              <FontAwesomeIcon icon={faCirclePlay} className="button" />
            </a>
          </div>
          <div className="col pt-1 ps-4 text">{props.phonetic.text}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
