import React from 'react';

export const HeadStyle1 = ({ faceColor }) => {
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
                ry={45}
                rx={39.2}
                cy={60}
                cx={65}
            />
        </g>
    );
};
