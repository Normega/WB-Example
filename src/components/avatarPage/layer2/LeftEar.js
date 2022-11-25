import React from "react";
import { LeftEarStyle2 } from "components/testSvgs/leftEarStyles/LeftEarStyle2";
import { LeftEarStyle1 } from "components/testSvgs/leftEarStyles/LeftEarStyle1";

/**
 * Description of Component
 */
export const LeftEar = ({ earColor, type }) => {
  const types = {
    1: <LeftEarStyle1 earColor={earColor} />,
    2: <LeftEarStyle2 earColor={earColor} />,
  };
  return types[type];
};
