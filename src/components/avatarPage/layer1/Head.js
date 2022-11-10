import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const Head = ({ faceColor }) => {
  return (
    <g
      style={{
        display: "inline",
      }}
    >
      <ellipse
        style={{
          fill: faceColor,
          fillOpacity: 1,
        }}
        ry={45.094}
        rx={38.982}
        cy={60.279}
        cx={65.464}
      />
    </g>
  );
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
