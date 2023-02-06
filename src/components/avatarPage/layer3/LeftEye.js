import React from "react";
import PropTypes from "prop-types";
import { LeftEyeStyle1 } from "components/avatarSvgs/leftEyeStyleSvgs/leftEyeStyle1";
import { LeftEyeStyle2 } from "components/avatarSvgs/leftEyeStyleSvgs/leftEyeStyle2";

/**
 * Description of Component
 */
export const LeftEye = ({ eyeColor, type }) => {
  const types = {
    1: <LeftEyeStyle1 eyeColor={eyeColor} />,
    2: <LeftEyeStyle2 eyeColor={eyeColor} />,
  };

  return types[type];
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
