import React from 'react';

export const HeadStyle2 = ({ faceColor }) => {
    return (
        <g
            style={{
                display: 'inline',
            }}>
            <ellipse
                style={{
                    fill: faceColor,
                    fillOpacity: 1,
                }}
                ry={46}
                rx={41}
                cy={60}
                cx={65}
            />
        </g>
    );
};
