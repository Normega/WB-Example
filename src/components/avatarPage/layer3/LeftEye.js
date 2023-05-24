import React from 'react';
import PropTypes from 'prop-types';
import { LeftEyeStyle1 } from '../../avatarSvgs/leftEyeStyleSvgs/leftEyeStyle1';
import { LeftEyeStyle2 } from '../../avatarSvgs/leftEyeStyleSvgs/leftEyeStyle2';
import { LeftEyeStyle3 } from '../../avatarSvgs/leftEyeStyleSvgs/leftEyeStyle3';
import { LeftEyeStyle4 } from '../../avatarSvgs/leftEyeStyleSvgs/leftEyeStyle4';

export const LeftEye = ({ eyeColor, type }) => {
    const types = {
        1: <LeftEyeStyle1 eyeColor={eyeColor} />,
        2: <LeftEyeStyle2 eyeColor={eyeColor} />,
        3: <LeftEyeStyle3 eyeColor={eyeColor} />,
        4: <LeftEyeStyle4 eyeColor={eyeColor} />,
    };

    return types[type];
};

LeftEye.propTypes = {
    eyeColor: PropTypes.string,
};

LeftEye.defaultProps = {
    eyeColor: '#99562a',
};
