import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../avatar/avatar";
import { selected_to_style } from "../avatarProps";

export const StyleDisplay = ({
  styles,
  selected,
  styleChangeFunc,
  curAvatarColors,
  curAvatarStyles,
}) => {
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
        let key = selected_to_style[selected];
        let new_props = { ...curAvatarStyles };
        new_props[key] = index + 1;
        return (
          <div
            onClick={() => {
              styleChangeFunc(index + 1);
            }}
            key={index}
            style={{
              width: "calc(20vh + 4px)",
              height: "calc(20vh + 4px)",
              backgroundColor: elem.color,
            }}
          >
            <div style={{ marginLeft: "2px", marginTop: "2px" }}>
              <Avatar {...curAvatarColors} {...new_props} size="20vh" />
            </div>
          </div>
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
