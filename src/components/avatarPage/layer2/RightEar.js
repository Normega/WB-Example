import React from 'react';
import { RightEarStyle2 } from '../../avatarSvgs/rightEarStyleSvgs/rightEarStyle2';
import { RightEarStyle1 } from '../../avatarSvgs/rightEarStyleSvgs/rightEarStyle1';

export const RightEar = ({ earColor, type }) => {
    const types = {
        1: <RightEarStyle1 earColor={earColor} />,
        2: <RightEarStyle2 earColor={earColor} />,
    };
    return types[type];
};
