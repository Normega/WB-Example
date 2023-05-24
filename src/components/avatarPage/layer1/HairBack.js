import React from 'react';
import PropTypes from 'prop-types';
import { HairBackStyle1 } from '../../avatarSvgs/hairBackStyles/hairBackStyle1';
import { HairBackStyle3 } from '../../avatarSvgs/hairBackStyles/hairBackStyle3';

/**
 * Description of Component
 */

export const HairBack = ({ hairColor, type }) => {
    const types = {
        1: <HairBackStyle1 hairColor={hairColor} />,
        2: <HairBackStyle1 hairColor={hairColor} />,
        3: <HairBackStyle1 hairColor={hairColor} />,
        4: <HairBackStyle1 hairColor={hairColor} />,
        5: <HairBackStyle1 hairColor={hairColor} />,
        6: <HairBackStyle3 hairColor={hairColor} />,
    };

    return types[type];
};

HairBack.propTypes = {
    hairColor: PropTypes.string,
};

HairBack.defaultProps = {
    hairColor: '#e29e68',
};
