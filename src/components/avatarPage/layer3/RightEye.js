import React from 'react';
import PropTypes from 'prop-types';
import { RightEyeStyle1 } from '../../avatarSvgs/rightEyeStyleSvgs/rightEyeStyle1';
import { RightEyeStyle2 } from '../../avatarSvgs/rightEyeStyleSvgs/rightEyeStyle2';
import { RightEyeStyle3 } from '../../avatarSvgs/rightEyeStyleSvgs/rightEyeStyle3';
import { RightEyeStyle4 } from '../../avatarSvgs/rightEyeStyleSvgs/rightEyeStyle4';

export const RightEye = ({ eyeColor, type }) => {
    const types = {
        1: <RightEyeStyle1 eyeColor={eyeColor} />,
        2: <RightEyeStyle2 eyeColor={eyeColor} />,
        3: <RightEyeStyle3 eyeColor={eyeColor} />,
        4: <RightEyeStyle4 eyeColor={eyeColor} />,
    };

    return types[type];
};

RightEye.propTypes = {
    eyeColor: PropTypes.string,
};

RightEye.defaultProps = {
    eyeColor: '#99562a',
};
