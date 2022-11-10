import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const Shirt = ({ shirtColor }) => {
  return (
    <path
      style={{
        display: "inline",
        fill: shirtColor,
        fillOpacity: 1,
      }}
      d="M24.77 132.207c42.046-.478 62.79.012 81.871-.565-7.907-18.89-25.528-19.973-25.528-19.973-9.304 10.36-24.379 9.238-31.297.37-25.584 7.13-25.047 20.168-25.047 20.168z"
    />
  );
};

Shirt.propTypes = {
  /**
   * Description of prop
   */
  shirtColor: PropTypes.string, //prop type
};

//default values for props
Shirt.defaultProps = {
  shirtColor: "#5f3e09",
};
