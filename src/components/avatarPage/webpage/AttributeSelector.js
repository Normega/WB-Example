import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AttributeSelector = ({
    name,
    color,
    height,
    updateSelected,
    isSelected,
    index,
    icon,
}) => {
    const [isHover, setIsHover] = useState(0);
    return (
        <div
            className='button'
            style={{
                width: '100%',
                height,
                display: 'flex',
                backgroundColor: isSelected ? '#3290b3' : isHover ? '#79cae8' : color,
                borderRadius: '10px',
                boxShadow: isHover ? '5px 5px 15px #bae5f5' : '',
            }}
            onMouseEnter={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => {
                setIsHover();
            }}
            onClick={() => {
                updateSelected(index);
            }}>
            <div
                className='iconFrame'
                style={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <img src={icon} style={{ width: '30px' }} />
            </div>
            <div
                className='text'
                style={{
                    flexGrow: 1,
                    margin: 'auto',
                    fontFamily: 'Open Sans, Arial, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: '#fff',
                    textAlign: 'center',
                    marginLeft: '-3.5vw',
                }}>
                {name}
            </div>
        </div>
    );
};

AttributeSelector.propTypes = {
    prop: PropTypes.string,
};

AttributeSelector.defaultProps = {
    name: 'CLOTHES',
    icon: 'test',
    color: '#50C1EA',
    height: '50px',
};
