import React from "react";
import { RightEarStyle2 } from "components/testSvgs/rightEarStyles/rightEarStyle2";
import { RightEarStyle1 } from "components/testSvgs/rightEarStyles/rightEarStyle1";
/**
 * Description of Component
 */
export const RightEar = ({ earColor, type }) => {
  const types = {
    1: <RightEarStyle1 earColor={earColor} />,
    2: <RightEarStyle2 earColor={earColor} />,
  };
  return types[type];
};
