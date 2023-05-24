import React from 'react';
import PropTypes from 'prop-types';
import { MouthStyle1 } from '../../avatarSvgs/mouthStyleSvgs/mouthStyle1';
import { MouthStyle2 } from '../../avatarSvgs/mouthStyleSvgs/mouthStyle2';
import { MouthStyle3 } from '../../avatarSvgs/mouthStyleSvgs/mouthStyle3';
import { MouthStyle4 } from '../../avatarSvgs/mouthStyleSvgs/mouthStyle4';
import { MouthStyle5 } from '../../avatarSvgs/mouthStyleSvgs/mouthStyle5';

export const Mouth = ({ mouthColor, type }) => {
    const types = {
        1: <MouthStyle1 mouthColor={mouthColor} />,
        2: <MouthStyle2 mouthColor={mouthColor} />,
        3: <MouthStyle3 mouthColor={mouthColor} />,
        4: <MouthStyle4 mouthColor={mouthColor} />,
        5: <MouthStyle5 mouthColor={mouthColor} />,
    };
    return types[type];
};

Mouth.propTypes = {
    mouthColor: PropTypes.string,
};

Mouth.defaultProps = {
    mouthColor: '#99562a',
};
