import React from "react";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();

  return (
    <button id="back-button" onClick={history.goBack}><i className="bi bi-arrow-left"></i>
      Back
    </button>
  );
};

export default BackButton;
