import { useContext } from "react";
import PropTypes from "prop-types";
import { AttributeSelector } from "./AttributeSelector";
import { Avatar } from "../avatar/avatar";
import { SelectedAttributeContext } from "pages/AvatarCreation";
import React, { useEffect, useState } from "react";

/**
 * Description of Component
 */

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const WebDisplayMiddle = ({ avatar }) => {
  const props = useContext(SelectedAttributeContext);

  const selected = props.selected;
  const setSelected = props.setSelected;

  const attributes = {
    left: [
      { name: "FACE" }, //index 0
      { name: "NOSE" }, //index 1
      { name: "EYEBROWS" }, //index 2
      { name: "CLOTHES" }, //index 3
      { name: "ACCESSORIES" }, //index 4
    ],
    right: [
      { name: "EYES" }, //index 5
      { name: "MOUTH" }, //index 6
      { name: "HAIR" }, //index 7
      { name: "FACIAL HAIR" }, //index 8
      { name: "EARS" }, //index 9
    ],
  };

  const { height, width } = useWindowDimensions();

  return (
    <div
      className="middle"
      style={{
        width: "100vw",
        height: "50vh",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: width / height < 1.18 ? "center" : "stretch",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "2vw" }} />
      <div
        className="left-column"
        style={{
          backgroundColor: "#ffffff",
          flexGrow: 1,
          overflow: "scroll",
          gap: "20px",
          display: width / height < 1.18 ? "none" : "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {attributes.left.map((elem, index) => {
          if (index == selected) {
            return (
              <AttributeSelector
                key={index}
                name={elem.name}
                updateSelected={() => {
                  setSelected(index);
                }}
                isSelected={true}
              />
            );
          } else {
            return (
              <AttributeSelector
                key={index}
                name={elem.name}
                updateSelected={() => {
                  setSelected(index);
                }}
                isSelected={false}
              />
            );
          }
        })}
      </div>
      <div style={{ width: "2vw" }} />
      <div
        className="avatar-frame"
        style={{
          backgroundColor: "#ffffff",
          width: "calc(50vh)",
          border: "2px solid black",
        }}
      >
        {avatar}
      </div>
      <div style={{ width: "2vw" }} />
      <div
        className="right-column"
        style={{
          backgroundColor: "#ffffff",
          flexGrow: 1,
          overflow: "scroll",
          gap: "20px",
          display: width / height < 1.18 ? "none" : "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {attributes.right.map((elem, index) => {
          let new_index = index + attributes.left.length;
          if (new_index == selected) {
            return (
              <AttributeSelector
                key={new_index}
                name={elem.name}
                updateSelected={() => {
                  setSelected(new_index);
                }}
                isSelected={true}
              />
            );
          } else {
            return (
              <AttributeSelector
                key={new_index}
                name={elem.name}
                updateSelected={() => {
                  setSelected(new_index);
                }}
                isSelected={false}
              />
            );
          }
        })}
      </div>
      <div style={{ width: "2vw" }} />
    </div>
  );
};

WebDisplayMiddle.propTypes = {
  /**
   * Description of prop
   */
  prop: PropTypes.string, //prop type
};

//default values for props
WebDisplayMiddle.defaultProps = {
  avatar: <Avatar size="calc(50vh - 4px)" />,
};
