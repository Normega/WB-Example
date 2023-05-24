import React from 'react';
import PropTypes from 'prop-types';
import { Head } from '../layer1/Head';
import { Body } from '../layer1/Body';
import { LeftEar } from '../layer2/LeftEar';
import { RightEar } from '../layer2/RightEar';
import { Shirt } from '../layer2/Shirt';
import { LeftEye } from '../layer3/LeftEye';
import { RightEye } from '../layer3/RightEye';
import { LeftEyebrow } from '../layer3/LeftEyebrow';
import { RightEyebrow } from '../layer3/RightEyebrow';
import { Hair } from '../layer3/Hair';
import { Mouth } from '../layer3/Mouth';
import { Nose } from '../layer3/Nose';
import { HairBack } from '../layer1/HairBack';

/**
 * Customizable character to be displayed on website
 */
export const Avatar = ({
    avatarBackgroundColor,
    skinColor,
    shirtColor,
    eyeColor,
    mouthColor,
    eyebrowColor,
    noseColor,
    hairColor,
    size,
    faceType,
    noseType,
    eyebrowType,
    shirtType,
    eyeType,
    mouthType,
    hairType,
    earType,
}) => {
    return (
        <div
            className='background'
            style={{
                backgroundColor: avatarBackgroundColor,
                width: size,
                height: size,
                overflow: 'hidden',
            }}>
            <svg
                viewBox='0 0 132.292 132.292'
                xmlSpace='preserve'
                xmlns='http://www.w3.org/2000/svg'>
                <g className='layer1'>
                    {/* Hair Back */}
                    <HairBack hairColor={hairColor} type={hairType} />
                    <Body bodyColor={skinColor} />
                </g>
                <g className='layer2'>
                    <Head faceColor={skinColor} type={faceType} />
                </g>
                <g className='layer3'>
                    <Hair hairColor={hairColor} type={hairType} />
                    <LeftEar earColor={skinColor} type={earType} />
                    <RightEar earColor={skinColor} type={earType} />
                    <Shirt shirtColor={shirtColor} type={shirtType} />
                    <LeftEye eyeColor={eyeColor} type={eyeType} />
                    <RightEye eyeColor={eyeColor} type={eyeType} />
                    <LeftEyebrow eyebrowColor={eyebrowColor} type={eyebrowType} />
                    <RightEyebrow eyebrowColor={eyebrowColor} type={eyebrowType} />
                    <Mouth mouthColor={mouthColor} type={mouthType} />
                    <Nose noseColor={noseColor} type={noseType} />
                </g>
            </svg>
        </div>
    );
};

Avatar.propTypes = {
    /**
     * What background color to use
     */
    avatarBackgroundColor: PropTypes.string,
    skinColor: PropTypes.string,
    shirtColor: PropTypes.string,
    eyeColor: PropTypes.string,
    mouthColor: PropTypes.string,
    eyebrowColor: PropTypes.string,
    noseColor: PropTypes.string,
    hairColor: PropTypes.string,
};

Avatar.defaultProps = {
    avatarBackgroundColor: '#b0d1b9',
    skinColor: '#e29e68',
    shirtColor: '#5f3e09',
    eyeColor: '#99562a',
    mouthColor: '#99562a',
    eyebrowColor: '#99562a',
    noseColor: '#99562a',
    hairColor: '#99562a',
    size: '250px',
};
