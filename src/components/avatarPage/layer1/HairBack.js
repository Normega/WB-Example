import React from "react";
import PropTypes from "prop-types";
import { HairBackStyle1 } from "components/avatarSvgs/hairBackStyles/hairBackStyle1";
import { HairBackStyle2 } from "components/avatarSvgs/hairBackStyles/hairBackStyle2";

/**
 * Description of Component
 */

export const HairBack = ({ hairColor, type }) => {
  const types = {
    1: <HairBackStyle2 hairColor={hairColor} />,
    2: <HairBackStyle2 hairColor={hairColor} />,
    3: <HairBackStyle2 hairColor={hairColor} />,
    4: <HairBackStyle2 hairColor={hairColor} />,
    5: <HairBackStyle2 hairColor={hairColor} />,
    6: <HairBackStyle1 hairColor={hairColor} />,
  };

  return types[type];
};

HairBack.propTypes = {
  /**
   * Description of prop
   */
  hairColor: PropTypes.string, //prop type
};

//default values for props
HairBack.defaultProps = {
  hairColor: "#e29e68",
};
