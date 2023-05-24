import React from 'react';

export const ClothesStyle3 = ({ shirtColor }) => {
    return (
        <svg>
            <path
                style={{
                    display: 'inline',
                    fill: shirtColor,
                    fillOpacity: 0.979661,
                    strokeWidth: 0.389336,
                }}
                d='M54.686 175.401C8.689 186.543 10.917 207.51 10.917 207.51c70.47-.345 115.25 1 120.66-.184-13.045-31.765-45.535-31.48-45.535-31.48-13.59 6.604-15.758 7.703-31.356-.444z'
                transform='translate(5, -64) scale(0.85, 1)'
            />
            <path
                style={{
                    fill: '#fff',
                    fillOpacity: 0.6,
                    strokeWidth: 0.264583,
                }}
                d='M54.917 175.561c-8.865 11.027 6.054 31.783 6.054 31.783h19.675s-14.702 24.648 0 0 5.621-31.999 5.621-31.999 13.621-4.54 0 0c-13.62 4.54-31.35.216-31.35.216z'
                transform='translate(5, -64) scale(0.85, 1)'
            />
        </svg>
    );
};
