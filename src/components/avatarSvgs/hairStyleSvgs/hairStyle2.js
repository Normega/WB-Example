import React from 'react';

export const HairStyle2 = ({ hairColor }) => {
    return (
        <svg style={{ backgroundSize: '' }}>
            <path
                style={{
                    fill: hairColor,
                }}
                transform='scale(0.70) translate(36, 15)'
                d='M.506 76.916C-2.052 28.386 4.762 6.824 28.502 2.5 42.565-.411 57.795.023 57.795.023s31.919-.199 41.662 7.173c12.597 7.648 20.644 33.374 12.993 73.26-4.782-35.71-14.351-33.248-14.351-33.248-24.023 4.803-52.684 6.703-82.767-1.297C10.388 47.948 3.797 52.517.506 76.916Z'
            />
        </svg>
    );
};
