import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const LeftEar = ({ earColor }) => {
  return (
    <g>
      <path
        style={{
          fill: earColor,
          fillOpacity: 1,
        }}
        d="M30.965 81.153c-20.075-12.026-4.42-23.616-4.42-23.616.807 7.211-1.145 8.645 4.42 23.616z"
      />
      <path
        style={{
          fill: "#000000",
          fillOpacity: 0.2,
        }}
        d="M29.037 76.057c-10.617-8.169-2.338-16.04-2.338-16.04.427 4.897-.605 5.87 2.338 16.04z"
      />
    </g>
  );
};

LeftEar.propTypes = {
  /**
   * Description of prop
   */
  earColor: PropTypes.string, //prop type
};

//default values for props
LeftEar.defaultProps = {
  earColor: "#e29e68",
};
