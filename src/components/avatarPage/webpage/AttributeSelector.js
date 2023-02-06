import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * Description of Component
 */
export const AttributeSelector = ({
  name,
  color,
  height,
  updateSelected,
  index,
  isSelected,
}) => {
  const [isHover, setIsHover] = useState(0);
  return (
    <div
      className="button"
      style={{
        width: "100%",
        height: height,
        display: "flex",
        backgroundColor: isSelected ? "#3290b3" : isHover ? "#79cae8" : color,
        borderRadius: "10px",
        boxShadow: isHover ? "5px 5px 15px #bae5f5" : "",
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover();
      }}
      onClick={() => {
        updateSelected(index);
      }}
    >
      <div
        className="iconFrame"
        style={{
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="icon"
          style={{
            borderRadius: "50%",
            backgroundColor: "#f1f1f1",
            width: `calc(${height} - 10px)`,
            height: `calc(${height} - 10px)`,
          }}
        ></div>
      </div>
      <div
        className="text"
        style={{
          flexGrow: 1,
          margin: "auto",
          fontFamily: "Open Sans, Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#fff",
          textAlign: "center",
          marginLeft: "-3.5vw",
        }}
      >
        {name}
      </div>
    </div>
  );
};

AttributeSelector.propTypes = {
  /**
   * Description of prop
   */
  prop: PropTypes.string, //prop type
};

//default values for props
AttributeSelector.defaultProps = {
  name: "CLOTHES",
  icon: "test",
  color: "#50C1EA",
  height: "50px",
};
