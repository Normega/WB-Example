import React from 'react';
import { NoseStyle2 } from '../../avatarSvgs/noseStyleSvgs/noseStyle2';
import { NoseStyle1 } from '../../avatarSvgs/noseStyleSvgs/noseStyle1';

export const Nose = ({ noseColor, type }) => {
    const types = {
        1: <NoseStyle1 noseColor={noseColor} />,
        2: <NoseStyle2 noseColor={noseColor} />,
    };

    return types[type];
};
