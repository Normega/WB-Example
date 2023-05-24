import React from 'react';

export const NoseStyle2 = ({ noseColor }) => (
    <ellipse
        style={{
            fill: noseColor,
            fillOpacity: 1,
            stroke: 'none',
        }}
        cx={106}
        cy={166}
        rx={3}
        ry={3}
        transform='translate(-40.5 -87)'
    />
);
