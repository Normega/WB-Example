import React from 'react';
import PropTypes from 'prop-types';
import { RightEyebrowStyle1 } from '../../avatarSvgs/rightEyebrowStyleSvgs/eyebrowStyle1';

export const RightEyebrow = ({ eyebrowColor, type }) => {
    const types = {
        1: <RightEyebrowStyle1 eyebrowColor={eyebrowColor} />,
    };
    return types[type];
};

RightEyebrow.propTypes = {
    eyebrowColor: PropTypes.string,
};

RightEyebrow.defaultProps = {
    eyebrowColor: '#99562a',
};
