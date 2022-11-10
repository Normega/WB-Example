import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const LeftEye = ({ eyeColor }) => {
  return (
    <ellipse
      style={{
        fill: eyeColor,
        fillOpacity: 1,
      }}
      cx={47.507}
      cy={65.876}
      rx={4.117}
      ry={4.434}
    />
  );
};

LeftEye.propTypes = {
  /**
   * Description of prop
   */
  eyeColor: PropTypes.string, //prop type
};

//default values for props
LeftEye.defaultProps = {
  eyeColor: "#99562a",
};
