import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../avatar/avatar";
import { WebDisplayMiddle } from "./WebDisplayMiddle";
import { createContext } from "react";
import { useState } from "react";
import { StyleDisplay } from "./StyleDisplay";
import { HexColorPicker } from "react-colorful";

/**
 * Description of Component
 */

export const SelectedAttributeContext = createContext();

export const WebDisplay = ({ prop }) => {
  const [selected, setSelected] = useState(0);
  const [avatarProps, setAvatarProps] = useState({
    avatarBackgroundColor: "#b0d1b9",
    skinColor: "#e29e68",
    shirtColor: "#5f3e09",
    eyeColor: "#99562a",
    mouthColor: "#99562a",
    eyebrowColor: "#99562a",
    noseColor: "#99562a",
    hairColor: "#99562a",
    size: "calc(50vh - 4px)",
  });

  const selected_to_prop = {
    0: "skinColor",
    1: "noseColor",
    2: "eyebrowColor",
    3: "shirtColor",
    4: "accessoryColor",
    5: "eyeColor",
    6: "mouthColor",
    7: "hairColor",
    8: "facialHairColor",
    9: "otherColor",
  };

  const styles = [
    [
      { color: "#654a80" },
      { color: "#ed985f" },
      { color: "#654a80" },
      { color: "#ed985f" },
      { color: "#654a80" },
      { color: "#ed985f" },
    ],
    [{ color: "green" }, { color: "purple" }],
    [
      { color: "#654a80" },
      { color: "#ed985f" },
      { color: "#654a80" },
      { color: "#ed985f" },
      { color: "#654a80" },
      { color: "#ed985f" },
      { color: "#654a80" },
      { color: "#ed985f" },
    ],
    [{ color: "green" }, { color: "purple" }],
    [{ color: "green" }, { color: "purple" }],
    [{ color: "green" }, { color: "purple" }],
    [{ color: "green" }, { color: "purple" }],
    [{ color: "green" }, { color: "purple" }],
    [{ color: "green" }, { color: "purple" }],
    [{ color: "green" }, { color: "purple" }],
  ]; //list[list[objects]] outerlist is attribute, innerlist is different styles, object is what style includes

  function handleChange(color) {
    let key = selected_to_prop[selected];
    let new_props = { ...avatarProps };
    new_props[key] = color;
    setAvatarProps(new_props);
  }

  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="header"
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "#ffffff",
        }}
      ></div>
      <SelectedAttributeContext.Provider
        value={{ selected: selected, setSelected: setSelected }}
      >
        <WebDisplayMiddle avatar={<Avatar {...avatarProps} />} />
      </SelectedAttributeContext.Provider>
      <div style={{ height: "2vh" }} />
      <div
        className="bottom"
        style={{
          height: "38vh",
          width: "100vw",
          backgroundColor: "#f8f8f8",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRight: "1px solid gray",
            width: "20vw",
            height: "100%",
          }}
        >
          <HexColorPicker
            color={avatarProps[selected_to_prop[selected]]}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            width: "80vw",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              height: "100%",
              width: "100%",
              justifyContent: styles[selected].length > 5 ? "start" : "center",
              alignItems: "center",
            }}
          >
            <StyleDisplay styles={styles[selected]} />
          </div>
        </div>
      </div>
    </div>
  );
};

WebDisplay.propTypes = {
  /**
   * Description of prop
   */
  prop: PropTypes.string, //prop type
};

//default values for props
WebDisplay.defaultProps = {
  prop: "test",
};
