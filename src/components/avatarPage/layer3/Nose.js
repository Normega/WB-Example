import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const Nose = ({ noseColor }) => {
  return (
    <path
      style={{
        fill: noseColor,
        fillOpacity: 1,
      }}
      d="M63.533 77.688c1.237-.227 3.296-.234 4.45.042 1.152.277 1.398.836 1.382 1.382-.017.547-.297 1.08-1.567 1.349-1.27.269-3.531.273-4.752-.047-1.221-.32-1.401-.963-1.284-1.508.118-.545.533-.992 1.77-1.218z"
    />
  );
};

Nose.propTypes = {
  /**
   * Description of prop
   */
  noseColor: PropTypes.string, //prop type
};

//default values for props
Nose.defaultProps = {
  noseColor: "#99562a",
};
