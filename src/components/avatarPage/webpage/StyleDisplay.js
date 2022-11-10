import React from "react";
import PropTypes from "prop-types";

/**
 * Description of Component
 */
export const StyleDisplay = ({ styles }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        columnGap: "5vh",
      }}
    >
      <div />
      {styles.map((elem, index) => {
        return (
          <div
            key={index}
            style={{
              width: "20vh",
              height: "20vh",
              backgroundColor: elem.color,
            }}
          ></div>
        );
      })}
      <div />
    </div>
  );
};

StyleDisplay.propTypes = {
  /**
   * Description of prop
   */
  prop: PropTypes.string, //prop type
};

//default values for props
StyleDisplay.defaultProps = {
  prop: "test",
};
