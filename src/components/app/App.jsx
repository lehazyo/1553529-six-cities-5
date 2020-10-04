import React from "react";
import PropTypes from "prop-types";
import Title from "../Title/Title";

const App = (props) => {

  return (
    <Title
      availableOffersCount={props.availableOffersCount}
    />
  );
};

App.propTypes = {
  availableOffersCount: PropTypes.number.isRequired,
};

export default App;
