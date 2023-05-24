import React from 'react';

export const MouthStyle2 = ({ mouthColor }) => {
    return (
        <svg>
            <g
                style={{
                    display: 'inline',
                }}>
                <path
                    style={{
                        fill: mouthColor,
                        fillOpacity: 1,
                        strokeWidth: 0.179804,
                    }}
                    d='M56.637 94.673c-.842-6.257 19.704-6.218 18.78.43 1.013 5.65-19.814 6.263-18.78-.43z'
                    transform='matrix(1.4715 0 0 1.4715 -31.5 -47.5)'
                />
                <path
                    style={{
                        display: 'inline',
                        opacity: 1,
                        fill: '#de0100',
                        fillOpacity: 1,
                        strokeWidth: 0.2,
                    }}
                    d='M104.464 160.096c6.885-6.354 12.913-.05 12.913-.05-5.275 1.398-7.754 1.61-12.913.05z'
                    transform='matrix(1.4715 0 0 1.4715 -98 -138.103)'
                />
            </g>
        </svg>
    );
};
