import React from 'react';

export const MouthStyle4 = ({ mouthColor }) => {
    return (
        <svg
            style={{
                overflow: 'hidden!important',
            }}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M4.216 1.567s34.461 3.567 45.975 3.597c12.522.027 53.025-3.597 53.025-3.597-11.709 8.478-24.597 16.63-53.778 16.791-26.103.147-32.787-8.124-45.222-16.79Z'
                fill='#fff'
                transform='translate(48, 87) scale(0.33, 0.5)'
            />
            <path
                d='M4.216 1.567s34.461 3.567 45.975 3.597c12.522.027 53.025-3.597 53.025-3.597-11.709 8.478-24.597 16.63-53.778 16.791-26.103.147-32.787-8.124-45.222-16.79Z'
                fill='none'
                stroke={mouthColor}
                strokeWidth={2.25}
                transform='translate(48, 87) scale(0.33, 0.5)'
            />
        </svg>
    );
};
