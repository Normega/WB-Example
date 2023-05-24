import noseIcon from './icons/noseIcon.png';
import faceIcon from './icons/faceIcon.png';
import eyebrowIcon from './icons/eyebrowIcon.png';
import clothesIcon from './icons/clothesIcon.png';
import eyeIcon from './icons/eyeIcon.png';
import mouthIcon from './icons/mouthIcon.png';
import hairIcon from './icons/hairIcon.png';
import earIcon from './icons/earIcon.png';

export const attributes = {
    left: [
        { name: 'NOSE', icon: noseIcon }, // index 1
        { name: 'FACE', icon: faceIcon }, // index 0
        { name: 'EYEBROWS', icon: eyebrowIcon }, // index 2
        { name: 'CLOTHES', icon: clothesIcon }, // index 3
    ],
    right: [
        { name: 'EYES', icon: eyeIcon }, // index 4
        { name: 'MOUTH', icon: mouthIcon }, // index 5
        { name: 'HAIR', icon: hairIcon }, // index 6
        { name: 'EARS', icon: earIcon }, // index 7
    ],
};

export const selectedToStyle = {
    0: 'faceType',
    1: 'noseType',
    2: 'eyebrowType',
    3: 'shirtType',
    4: 'eyeType',
    5: 'mouthType',
    6: 'hairType',
    7: 'earType',
};

// number of choices displayed
export const styles = [
    [{ color: '#654a80' }, { color: '#ed985f' }], // face
    [{ color: '#654a80' }, { color: '#ed985f' }], // nose
    [{ color: '#654a80' }, { color: '#ed985f' }], // eyebrows
    [
        // clothes
        { color: '#654a80' },
        { color: '#ed985f' },
        { color: '#654a80' },
        { color: '#ed985f' },
        { color: '#654a80' },
        { color: '#ed985f' },
        { color: '#654a80' },
    ],
    [
        // eyes
        { color: '#654a80' },
        { color: '#ed985f' },
        { color: '#ed985f' },
        { color: '#ed985f' },
    ],

    [
        // mouth
        { color: '#654a80' },
        { color: '#ed985f' },
        { color: '#ed985f' },
        { color: '#ed985f' },
        { color: '#ed985f' },
    ],
    [
        // hair
        { color: '#654a80' },
        { color: '#ed985f' },
        { color: '#654a80' },
        { color: '#ed985f' },
        { color: '#654a80' },
        { color: '#ed985f' },
        { color: '#654a80' },
        { color: '#ed985f' },
    ],
    [{ color: '#654a80' }, { color: '#ed985f' }], // ear
]; // list[list[objects]] outerlist is attribute, innerlist is different styles, object is what style includes

export const selectedToColor = {
    0: 'skinColor',
    1: 'noseColor',
    2: 'eyebrowColor',
    3: 'shirtColor',
    4: 'eyeColor',
    5: 'mouthColor',
    6: 'hairColor',
    7: 'earColor',
};
