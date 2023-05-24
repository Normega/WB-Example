import React from 'react';
import PropTypes from 'prop-types';
import { HeadStyle1 } from '../../avatarSvgs/headStyleSvgs/headStyle1';
import { HeadStyle2 } from '../../avatarSvgs/headStyleSvgs/headStyle2';

/**
 * Description of Component
 */

export const Head = ({ faceColor, type }) => {
    const types = {
        1: <HeadStyle1 faceColor={faceColor} />,
        2: <HeadStyle2 faceColor={faceColor} />,
    };

    return types[type];
};

Head.propTypes = {
    faceColor: PropTypes.string,
};

Head.defaultProps = {
    faceColor: '#e29e68',
};
