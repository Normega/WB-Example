import React from "react";
import PropTypes from "prop-types";
import { HairStyle1 } from "components/avatarSvgs/hairStyleSvgs/hairStyle1";
import { HairStyle2 } from "components/avatarSvgs/hairStyleSvgs/hairStyle2";
import { HairStyle3 } from "components/avatarSvgs/hairStyleSvgs/hairStyle3";
import { HairStyle4 } from "components/avatarSvgs/hairStyleSvgs/hairStyle4";
import { HairStyle5 } from "components/avatarSvgs/hairStyleSvgs/hairStyle5";
import { HairStyle6 } from "components/avatarSvgs/hairStyleSvgs/hairStyle6";

/**
 * Description of Component
 */
export const Hair = ({ hairColor, type }) => {
  const types = {
    1: <HairStyle1 hairColor={hairColor} />,
    2: <HairStyle2 hairColor={hairColor} />,
    3: <HairStyle3 hairColor={hairColor} />,
    4: <HairStyle4 hairColor={hairColor} />,
    5: <HairStyle5 hairColor={hairColor} />,
    6: <HairStyle6 hairColor={hairColor} />,
  };

  return types[type];
};

Hair.propTypes = {
  /**
   * Description of prop
   */
  hairColor: PropTypes.string, //prop type
};

//default values for props
Hair.defaultProps = {
  hairColor: "#99562a",
};
