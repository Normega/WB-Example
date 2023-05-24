import React from 'react';

export const MouthStyle5 = ({ mouthColor }) => {
    return (
        <path
            style={{
                fill: mouthColor,
                fillOpacity: 1,
            }}
            d='M 48.14 40.78 C 45.34 38.25 40.65 34 32 34 C 23.35 34 18.66 38.25 15.86 40.78 L 15.33 41.25 C 15.062 41.489 14.942 41.854 15.015 42.205 C 15.173 42.963 16.093 43.266 16.67 42.75 L 17.2 42.26 C 19.79 39.92 24.12 36 32 36 C 39.88 36 44.21 39.92 46.8 42.26 L 47.015 42.459 C 47.579 42.526 48.16 42.601 48.742 42.681 C 49.1 42.291 49.111 41.644 48.67 41.25 Z'
            stroke={mouthColor}
            transform='translate(53, 78) scale(0.4, 0.4)'
        />
    );
};
