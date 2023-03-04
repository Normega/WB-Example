import React from "react";
import { Avatar } from "../components/avatarPage/avatar/avatar";
import { WebDisplayMiddle } from "../components/avatarPage/webpage/WebDisplayMiddle";
import { createContext } from "react";
import { useState } from "react";
import { StyleDisplay } from "../components/avatarPage/webpage/StyleDisplay";
import { HexColorPicker } from "react-colorful";
import { styles } from "components/avatarPage/avatarProps";
import { selected_to_color } from "components/avatarPage/avatarProps";
import { selected_to_style } from "components/avatarPage/avatarProps";
import "./AvatarCreation.css";

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
  });

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
          height: "5vh",
          backgroundColor: "#ffffff",
        }}
      ></div>
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
        <div style={{ display: "flex", gap: "2vw" }}>
          <button
            className="avatarButton"
            onClick={() => {
              let new_props = { ...avatarStyleProps };
              for (let index = 0; index < styles.length; index++) {
                let key = selected_to_style[index];
                console.log(key);
                let styleIndex =
                  Math.floor(Math.random() * styles[index].length) + 1;
                console.log(styleIndex);
                new_props[key] = styleIndex;
              }
              setAvatarStyleProps(new_props);
            }}
          >
            Randomize
          </button>
          <button
            className="avatarButton"
            onClick={() => {
              console.log(avatarColorProps);
              console.log(avatarStyleProps);
            }}
          >
            Submit
          </button>
        </div>
      </SelectedAttributeContext.Provider>
      <div
        className="bottom"
        style={{
          height: "40vh",
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
