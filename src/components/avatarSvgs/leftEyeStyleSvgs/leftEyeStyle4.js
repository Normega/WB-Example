import React from 'react';

export const LeftEyeStyle4 = ({ eyeColor }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'>
            <path
                style={{
                    fill: eyeColor,
                    strokeWidth: 0.2,
                }}
                d='M 28 22 C 28 21.23 27.167 20.749 26.5 21.134 C 26.191 21.313 26 21.643 26 22 C 26 25.079 22.667 27.004 20 25.464 C 18.762 24.75 18 23.429 18 22 C 18 21.23 17.167 20.749 16.5 21.134 C 16.191 21.313 16 21.643 16 22 C 16 26.619 21 29.506 25 27.196 C 26.856 26.124 28 24.144 28 22 Z'
                transform='translate(26, 47) scale(1.0, 0.8)'
            />
        </svg>
    );
};
