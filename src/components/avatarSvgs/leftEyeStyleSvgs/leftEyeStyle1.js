import React from 'react';

export const LeftEyeStyle1 = ({ eyeColor }) => {
    return (
        <ellipse
            style={{
                fill: eyeColor,
                fillOpacity: 1,
            }}
            cx={83.612}
            cy={65.876}
            rx={4.117}
            ry={4.434}
            transform='translate(-36, 0)'
        />
    );
};
