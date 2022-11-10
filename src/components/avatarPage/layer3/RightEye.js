import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const RightEye = ({ eyeColor }) => {
  return (
    <ellipse
      style={{
        fill: eyeColor,
        fillOpacity: 1,
      }}
      cx={83.612}
      cy={65.876}
      rx={4.117}
      ry={4.434}
    />
  );
};

RightEye.propTypes = {
  /**
   * Description of prop
   */
  eyeColor: PropTypes.string, //prop type
};

//default values for props
RightEye.defaultProps = {
  eyeColor: "#99562a",
};
