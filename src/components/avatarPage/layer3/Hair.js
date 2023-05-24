import React from 'react';
import PropTypes from 'prop-types';
import { HairStyle1 } from '../../avatarSvgs/hairStyleSvgs/hairStyle1';
import { HairStyle2 } from '../../avatarSvgs/hairStyleSvgs/hairStyle2';
import { HairStyle3 } from '../../avatarSvgs/hairStyleSvgs/hairStyle3';
import { HairStyle4 } from '../../avatarSvgs/hairStyleSvgs/hairStyle4';
import { HairStyle5 } from '../../avatarSvgs/hairStyleSvgs/hairStyle5';
import { HairStyle7 } from '../../avatarSvgs/hairStyleSvgs/hairStyle7';
import { HairStyle8 } from '../../avatarSvgs/hairStyleSvgs/hairStyle8';
import { HairStyle9 } from '../../avatarSvgs/hairStyleSvgs/hairStyle9';

export const Hair = ({ hairColor, type }) => {
    const types = {
        1: <HairStyle1 hairColor={hairColor} />,
        2: <HairStyle2 hairColor={hairColor} />,
        3: <HairStyle3 hairColor={hairColor} />,
        4: <HairStyle4 hairColor={hairColor} />,
        5: <HairStyle5 hairColor={hairColor} />,
        6: <HairStyle7 hairColor={hairColor} />,
        7: <HairStyle8 hairColor={hairColor} />,
        8: <HairStyle9 hairColor={hairColor} />,
    };

    return types[type];
};

Hair.propTypes = {
    hairColor: PropTypes.string,
};

Hair.defaultProps = {
    hairColor: '#99562a',
};
