import React from "react";
import PropTypes from "prop-types";
import { HeadStyle1 } from "components/testSvgs/headStyle1";
import { HeadStyle2 } from "components/testSvgs/headStyle2";

/**
 * Description of Component
 */

export const Head = ({ faceColor, type }) => {
  const types = {
    1: <HeadStyle1 faceColor={faceColor} />,
    2: <HeadStyle2 faceColor={faceColor} />,
  };

  return types[type];
};

Head.propTypes = {
  /**
   * Description of prop
   */
  faceColor: PropTypes.string, //prop type
};

//default values for props
Head.defaultProps = {
  faceColor: "#e29e68",
};
