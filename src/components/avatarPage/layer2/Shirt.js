import React from "react";
import PropTypes from "prop-types";

import { ClothesStyle1 } from "components/avatarSvgs/clothesStyleSvgs/clothesStyle1";
import { ClothesStyle2 } from "components/avatarSvgs/clothesStyleSvgs/clothesStyle2";

/**
 * Description of Component
 */
export const Shirt = ({ shirtColor, type }) => {
  const types = {
    1: <ClothesStyle1 shirtColor={shirtColor} />,
    2: <ClothesStyle2 shirtColor={shirtColor} />,
  };

  return types[type];
};

Shirt.propTypes = {
  /**
   * Description of prop
   */
  shirtColor: PropTypes.string, //prop type
};

//default values for props
Shirt.defaultProps = {
  shirtColor: "#5f3e09",
};
