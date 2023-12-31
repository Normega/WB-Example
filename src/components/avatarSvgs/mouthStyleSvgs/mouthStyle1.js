import React from 'react';

export const MouthStyle1 = ({ mouthColor }) => {
    return (
        <path
            style={{
                fill: mouthColor,
                fillOpacity: 1,
            }}
            d='M58.118 88.158c.173.112.753.504 2.018.773 1.265.268 3.214.412 5.138.442 1.923.03 3.82-.056 5.199-.46 1.377-.406 2.236-1.13 2.936-1.59.7-.46 1.24-.655 1.77-.567.53.087 1.047.456 1.176.959.129.502-.131 1.137-.596 1.725-.465.588-1.135 1.13-2.176 1.66-1.042.532-2.455 1.053-4.686 1.298-2.23.245-5.279.213-7.4.022-2.122-.19-3.318-.538-4.393-1.13-1.075-.593-2.03-1.43-2.396-2.183-.366-.753-.142-1.423.323-1.706.465-.283 1.17-.18 1.774.05.604.229 1.106.583 1.24.674.134.092-.1-.078.073.033z'
        />
    );
};
