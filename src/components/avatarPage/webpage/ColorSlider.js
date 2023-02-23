import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const ColorSlider = ({ prop }) => {
  return <div>{prop}</div>;
};

ColorSlider.propTypes = {
  /**
   * Description of prop
   */
  prop: PropTypes.string, //prop type
};

//default values for props
ColorSlider.defaultProps = {
  prop: "test",
};
