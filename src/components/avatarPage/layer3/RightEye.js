import React from "react";
import PropTypes from "prop-types";

import { RightEyeStyle2 } from "components/avatarSvgs/rightEyeStyleSvgs/rightEyeStyle2";
import { RightEyeStyle1 } from "components/avatarSvgs/rightEyeStyleSvgs/rightEyeStyle1";

/**
 * Description of Component
 */
export const RightEye = ({ eyeColor, type }) => {
  
  const types = {
    1: <RightEyeStyle1 eyeColor={eyeColor} />,
    2: <RightEyeStyle2 eyeColor={eyeColor} />,
  };

  return types[type];
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
