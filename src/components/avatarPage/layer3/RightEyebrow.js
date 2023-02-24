import React from "react";
import PropTypes from "prop-types";
import { RightEyebrowStyle1 } from "components/avatarSvgs/rightEyebrowStyleSvgs/eyebrowStyle1";


/**
 * Description of Component
 */
export const RightEyebrow = ({ eyebrowColor, type }) => {
  const types = {
    1: <RightEyebrowStyle1 eyebrowColor={eyebrowColor} />,
  };
  return (
    types[type]
  );
};

RightEyebrow.propTypes = {
  /**
   * Description of prop
   */
  eyebrowColor: PropTypes.string, //prop type
};

//default values for props
RightEyebrow.defaultProps = {
  eyebrowColor: "#99562a",
};
