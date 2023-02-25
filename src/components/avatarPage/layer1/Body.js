import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const Body = ({ bodyColor }) => {
  return (
    <g>
      <path
        style={{
          fill: bodyColor,
        }}
        d="M54.699 103.497c0 6.373.06 6.963.06 6.963s31.47-7.3 0 0c-30.271 7.022-30.212 21.597-30.212 21.597l82.55.059s11.007 23.39 0 0c-9.913-21.066-31.038-21.302-31.038-21.302l-.118-7.199s-4.78 1.52-10.798 1.518c-5.823-.002-10.444-1.636-10.444-1.636z"
      />
      <path
        style={{
          fill: "#000000",
          fillOpacity: 0.2,
        }}
        d="M54.7 103.3c10.4 4.305 21.162.0 21.162.0l.011 2.3c-7.4 2.6-13.1 2.6-21.212.0z"
      />
    </g>
  );
};

Body.propTypes = {
  /**
   * Description of prop
   */
  bodyColor: PropTypes.string, //prop type
};

//default values for props
Body.defaultProps = {
  bodyColor: "#e29e68",
};
