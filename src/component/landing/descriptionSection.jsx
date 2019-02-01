import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faDumbbell,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

const DescriptionSection = () => {
  return (
    <div id="description-section" className="jumbotron">
      <div>
        <FontAwesomeIcon icon={faHeartbeat} />
        <p>Exercise is essential for maintaing a healthy lifestyle</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faPencilAlt} />
        <p>Create simple, customizable workout programs</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faDumbbell} />
        <p>Easily record your weights and track your progress</p>
      </div>
    </div>
  );
};

export default DescriptionSection;
