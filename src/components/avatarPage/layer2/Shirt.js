import React from 'react';
import PropTypes from 'prop-types';

import { ClothesStyle1 } from '../../avatarSvgs/clothesStyleSvgs/clothesStyle1';
import { ClothesStyle2 } from '../../avatarSvgs/clothesStyleSvgs/clothesStyle2';
import { ClothesStyle3 } from '../../avatarSvgs/clothesStyleSvgs/clothesStyle3';
import { ClothesStyle4 } from '../../avatarSvgs/clothesStyleSvgs/clothesStyle4';
import { ClothesStyle5 } from '../../avatarSvgs/clothesStyleSvgs/clothesStyle5';
import { ClothesStyle6 } from '../../avatarSvgs/clothesStyleSvgs/clothesStyle6';
import { ClothesStyle7 } from '../../avatarSvgs/clothesStyleSvgs/clothesStyle7';

/**
 * Description of Component
 */
export const Shirt = ({ shirtColor, type }) => {
    const types = {
        1: <ClothesStyle1 shirtColor={shirtColor} />,
        2: <ClothesStyle2 shirtColor={shirtColor} />,
        3: <ClothesStyle3 shirtColor={shirtColor} />,
        4: <ClothesStyle4 shirtColor={shirtColor} />,
        5: <ClothesStyle5 shirtColor={shirtColor} />,
        6: <ClothesStyle6 shirtColor={shirtColor} />,
        7: <ClothesStyle7 shirtColor={shirtColor} />,
    };

    return types[type];
};

Shirt.propTypes = {
    shirtColor: PropTypes.string,
};

Shirt.defaultProps = {
    shirtColor: '#5f3e09',
};
