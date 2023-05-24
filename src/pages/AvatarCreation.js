import React, { useEffect } from "react";
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
import { getAuth } from "firebase/auth";
import db from "../db/index"
import { doc, updateDoc } from "firebase/firestore";

/**
 * Description of Component
 */

export const SelectedAttributeContext = createContext();

export const AvatarCreationPage = ({ prop }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [selected, setSelected] = useState(0);
  const [avatarColorProps, setAvatarColorProps] = useState(null);
  const [avatarStyleProps, setAvatarStyleProps] = useState(null);

  useEffect(() => {
    if (user == null) {
      return;
    }
    db.collection("profiles").doc(user.uid).get().then((document) => {
      if (document.exists) {
        const data = document.data();
        setAvatarColorProps(data.avatar.colors);
        setAvatarStyleProps(data.avatar.styles);
      }
    });
  }, []);

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

  function updateAvatar() {
    let new_colors = { ...avatarColorProps };
    let new_styles = { ...avatarStyleProps };
    let new_avatar = {
      styles: new_styles,
      colors: new_colors
    };

    db.collection("profiles").doc(user.uid).get().then((document) => {
      if (document.exists) {
        const new_data = {
          ...document.data(),
          avatar: new_avatar,
          created_avatar: true
        };
        updateDoc(doc(db, "profiles", user.uid), new_data);
      }
    })
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
      {avatarColorProps != null && avatarStyleProps != null ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                    let styleIndex =
                      Math.floor(Math.random() * styles[index].length) + 1;
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
                  updateAvatar();
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
                  justifyContent:
                    styles[selected].length > 5 ? "start" : "center",
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
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            fontSize: "2em",
          }}
        >
          {" "}
          Loading...{" "}
        </div>
      )}
    </div>
  );
};
