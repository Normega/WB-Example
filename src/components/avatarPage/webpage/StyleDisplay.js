import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../avatar/avatar';
import { selectedToStyle } from '../avatarProps';

export const StyleDisplay = ({
    styles,
    selected,
    styleChangeFunc,
    curAvatarColors,
    curAvatarStyles,
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'nowrap',
                columnGap: '5vh',
            }}>
            <div />
            {styles.map((elem, index) => {
                const key = selectedToStyle[selected];
                const newProps = { ...curAvatarStyles };
                newProps[key] = index + 1;
                return (
                    <div
                        onClick={() => {
                            styleChangeFunc(index + 1);
                        }}
                        key={index}
                        style={{
                            width: 'calc(20vh + 4px)',
                            height: 'calc(20vh + 4px)',
                            backgroundColor: elem.color,
                        }}>
                        <div style={{ marginLeft: '2px', marginTop: '2px' }}>
                            <Avatar {...curAvatarColors} {...newProps} size='20vh' />
                        </div>
                    </div>
                );
            })}
            <div />
        </div>
    );
};

StyleDisplay.propTypes = {
    prop: PropTypes.string,
};

StyleDisplay.defaultProps = {
    prop: 'test',
};
