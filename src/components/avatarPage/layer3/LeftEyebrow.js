import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const LeftEyebrow = ({ eyebrowColor }) => {
  return (
    <path
      style={{
        fill: eyebrowColor,
        fillOpacity: 1,
      }}
      d="M54.718 56.9c-7.193-6.061-14.144-.242-14.144-.242s.568-4.315 0 0c-.404 3.071 2.91 2.506 2.91 2.506s-4.936 4.005 0 0c4.283-3.476 8.082.08 8.082.08s-4.671-.424 0 0c2.667.243 3.152-2.343 3.152-2.343z"
    />
  );
};

LeftEyebrow.propTypes = {
  /**
   * Description of prop
   */
  eyebrowColor: PropTypes.string, //prop type
};

//default values for props
LeftEyebrow.defaultProps = {
  eyebrowColor: "#99562a",
};
