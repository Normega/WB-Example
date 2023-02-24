import React from "react";
import PropTypes from "prop-types";

import { MouthStyle1 } from "components/avatarSvgs/mouthStyleSvgs/mouthStyle1";
import { MouthStyle2 } from "components/avatarSvgs/mouthStyleSvgs/mouthStyle2";
/**
 * Description of Component
 */
export const Mouth = ({ mouthColor, type }) => {
  const types = {
    1: <MouthStyle1 mouthColor={mouthColor} />,
    2: <MouthStyle2 mouthColor={mouthColor} />,
  };
  return (
    types[type]
  );
};

Mouth.propTypes = {
  /**
   * Description of prop
   */
  mouthColor: PropTypes.string, //prop type
};

//default values for props
Mouth.defaultProps = {
  mouthColor: "#99562a",
};
