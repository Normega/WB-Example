import React, { useEffect, useState, useContext } from 'react';
import { AttributeSelector } from './AttributeSelector';
import { Avatar } from '../avatar/avatar';
import { SelectedAttributeContext } from '../../../pages/AvatarCreation';
import { attributes } from '../avatarProps';
import PropTypes from 'prop-types';

/**
 * Description of Component
 */

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export const WebDisplayMiddle = ({ avatar }) => {
    const props = useContext(SelectedAttributeContext);

    const selected = props.selected;
    const setSelected = props.setSelected;

    const { height, width } = useWindowDimensions();

    return (
        <div
            className='middle'
            style={{
                width: '100vw',
                height: '50vh',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: width / height < 1.18 ? 'center' : 'stretch',
                justifyContent: 'center',
            }}>
            <div style={{ width: '2vw' }} />
            <div
                className='left-column'
                style={{
                    backgroundColor: '#ffffff',
                    flexGrow: 1,
                    overflow: 'scroll',
                    gap: '20px',
                    display: width / height < 1.18 ? 'none' : 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                }}>
                {attributes.left.map((elem, index) => {
                    if (index === selected) {
                        return (
                            <AttributeSelector
                                key={index}
                                name={elem.name}
                                icon={elem.icon}
                                updateSelected={() => {
                                    setSelected(index);
                                }}
                                isSelected={true}
                            />
                        );
                    } else {
                        return (
                            <AttributeSelector
                                key={index}
                                name={elem.name}
                                icon={elem.icon}
                                updateSelected={() => {
                                    setSelected(index);
                                }}
                                isSelected={false}
                            />
                        );
                    }
                })}
            </div>
            <div style={{ width: '2vw' }} />
            <div
                className='avatar-frame'
                style={{
                    backgroundColor: '#ffffff',
                    width: 'calc(50vh)',
                    border: '2px solid black',
                }}>
                {avatar}
            </div>
            <div style={{ width: '2vw' }} />
            <div
                className='right-column'
                style={{
                    backgroundColor: '#ffffff',
                    flexGrow: 1,
                    overflow: 'scroll',
                    gap: '20px',
                    display: width / height < 1.18 ? 'none' : 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                }}>
                {attributes.right.map((elem, index) => {
                    const newIndex = index + attributes.left.length;
                    if (newIndex === selected) {
                        return (
                            <AttributeSelector
                                key={newIndex}
                                name={elem.name}
                                icon={elem.icon}
                                updateSelected={() => {
                                    setSelected(newIndex);
                                }}
                                isSelected={true}
                            />
                        );
                    } else {
                        return (
                            <AttributeSelector
                                key={newIndex}
                                name={elem.name}
                                icon={elem.icon}
                                updateSelected={() => {
                                    setSelected(newIndex);
                                }}
                                isSelected={false}
                            />
                        );
                    }
                })}
            </div>
            <div style={{ width: '2vw' }} />
        </div>
    );
};

WebDisplayMiddle.propTypes = {
    prop: PropTypes.string,
};

WebDisplayMiddle.defaultProps = {
    avatar: <Avatar size='calc(50vh - 4px)' />,
};
