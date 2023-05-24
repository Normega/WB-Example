import React from 'react';

export const MouthStyle3 = ({ mouthColor }) => {
    return (
        <svg
            style={{
                overflow: 'hidden!important',
            }}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M63.533 90.688c1.237-.227 3.296-.234 4.45.042 1.152.277 1.398.836 1.382 1.382-.017.547-.297 1.08-1.567 1.349-1.27.269-3.531.273-4.752-.047-1.221-.32-1.401-.963-1.284-1.508.118-.545.533-.992 1.77-1.218z'
                fill={mouthColor}
                strokeWidth={1}
            />
        </svg>
    );
};
