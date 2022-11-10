import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const RightEar = ({ earColor }) => {
  return (
    <g>
      <path
        style={{
          fill: earColor,
          fillOpacity: 1,
        }}
        d="M99.694 81.42c20.075-12.026 4.768-24.225 4.768-24.225-.807 7.21.797 9.254-4.768 24.225z"
      />
      <path
        style={{
          display: "inline",
          fill: "#000000",
          fillOpacity: 0.2,
        }}
        d="M102.112 75.924c10.617-8.168 2.338-16.04 2.338-16.04-.427 4.898.605 5.872-2.338 16.04z"
      />
    </g>
  );
};

RightEar.propTypes = {
  /**
   * Description of prop
   */
  earColor: PropTypes.string, //prop type
};

//default values for props
RightEar.defaultProps = {
  earColor: "#e29e68",
};
