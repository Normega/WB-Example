import React from 'react';

export const RightEyeStyle3 = ({ eyeColor }) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'>
            <path
                style={{
                    fill: eyeColor,
                    strokeWidth: 0.2,
                }}
                d='M 28 21 L 13 21 C 12.23 21 11.749 21.833 12.134 22.5 C 12.313 22.809 12.643 23 13 23 L 16.09 23 C 16.887 27.55 22.31 29.53 25.852 26.565 C 26.937 25.657 27.666 24.394 27.91 23 L 28 23 C 28.77 23 29.251 22.167 28.866 21.5 C 28.687 21.191 28.357 21 28 21 Z'
                transform='translate(67, 47) scale(0.8, 0.8)'
            />
        </svg>
    );
};
