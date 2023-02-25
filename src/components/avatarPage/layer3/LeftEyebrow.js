import React from "react";
import PropTypes from "prop-types";

import { LeftEyebrowStyle1 } from "components/avatarSvgs/leftEyebrowStyleSvgs/leftEyebrowStyle1";
/**
 * Description of Component
 */
export const LeftEyebrow = ({ eyebrowColor, type }) => {
  const types = {
    1: <LeftEyebrowStyle1 eyebrowColor={eyebrowColor} />,
  };
  return (
    types[type]
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
