import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "../components/avatarPage/avatar/avatar";
import { WebDisplayMiddle } from "../components/avatarPage/webpage/WebDisplayMiddle";
import { createContext } from "react";
import { useState } from "react";
import { StyleDisplay } from "../components/avatarPage/webpage/StyleDisplay";
import { HexColorPicker } from "react-colorful";

/**
 * Description of Component
 */

export const SelectedAttributeContext = createContext();

export const AvatarCreationPage = ({ prop }) => {
  const [selected, setSelected] = useState(0);
  const [avatarColorProps, setAvatarColorProps] = useState({
    avatarBackgroundColor: "#b0d1b9",
    skinColor: "#e29e68",
    shirtColor: "#5f3e09",
    eyeColor: "#99562a",
    mouthColor: "#99562a",
    eyebrowColor: "#99562a",
    noseColor: "#99562a",
    hairColor: "#99562a",
  });

  const [avatarStyleProps, setAvatarStyleProps] = useState({
    faceType: 1,
    shirtType: 1,
    eyeType: 1,
    mouthType: 1,
    eyebrowType: 1,
    noseType: 1,
    hairType: 1,
    earType: 1,
    facialHairType: 1,
    accessoryType: 1,
  });

  const selected_to_color = {
    0: "skinColor",
    1: "noseColor",
    2: "eyebrowColor",
    3: "shirtColor",
    4: "accessoryColor",
    5: "eyeColor",
    6: "mouthColor",
    7: "hairColor",
    8: "facialHairColor",
    9: "earColor",
  };

  const selected_to_style = {
    0: "faceType",
    1: "noseType",
    2: "eyebrowType",
    3: "shirtType",
    4: "accessoryType",
    5: "eyeType",
    6: "mouthType",
    7: "hairType",
    8: "facialHairType",
    9: "earType",
  };

  const styles = [
    [{ color: "#654a80" }],
    [{ color: "#654a80" }, { color: "#ed985f" }],
    [{ color: "#654a80" }, { color: "#ed985f" }],
    [{ color: "#654a80" }, { color: "#ed985f" }],
    [{ color: "#654a80" }, { color: "#ed985f" }],
    [{ color: "#654a80" }, { color: "#ed985f" }],
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
    [{ color: "#654a80" }, { color: "#ed985f" }],
    [{ color: "#654a80" }, { color: "#ed985f" }],
    [{ color: "#654a80" }, { color: "#ed985f" }],
  ]; //list[list[objects]] outerlist is attribute, innerlist is different styles, object is what style includes

  function handleChange(color) {
    let key = selected_to_color[selected];
    let new_props = { ...avatarColorProps };
    new_props[key] = color;
    setAvatarColorProps(new_props);
  }

  function styleChange(styleNum) {
    let key = selected_to_style[selected];
    let new_props = { ...avatarStyleProps };
    new_props[key] = styleNum;
    setAvatarStyleProps(new_props);
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
      >
        <button
          onClick={() => {
            console.log(avatarColorProps);
            console.log(avatarStyleProps);
          }}
        >
          Submit
        </button>
      </div>
      <SelectedAttributeContext.Provider
        value={{ selected: selected, setSelected: setSelected }}
      >
        <WebDisplayMiddle
          avatar={
            <Avatar
              {...avatarColorProps}
              {...avatarStyleProps}
              size="calc(50vh - 4px)"
            />
          }
        />
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
            style={{ width: "25vh", height: "25vh" }}
            color={avatarColorProps[selected_to_color[selected]]}
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
            <StyleDisplay
              curAvatarColors={avatarColorProps}
              curAvatarStyles={avatarStyleProps}
              styles={styles[selected]}
              selected={selected}
              styleChangeFunc={styleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
