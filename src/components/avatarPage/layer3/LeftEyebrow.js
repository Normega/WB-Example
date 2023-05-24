import React from 'react';
import PropTypes from 'prop-types';
import { LeftEyebrowStyle1 } from '../../avatarSvgs/leftEyebrowStyleSvgs/leftEyebrowStyle1';

export const LeftEyebrow = ({ eyebrowColor, type }) => {
    const types = {
        1: <LeftEyebrowStyle1 eyebrowColor={eyebrowColor} />,
    };
    return types[type];
};

LeftEyebrow.propTypes = {
    eyebrowColor: PropTypes.string,
};

LeftEyebrow.defaultProps = {
    eyebrowColor: '#99562a',
};
