import React, { useState, useEffect, createContext } from 'react';
import { Avatar } from '../components/avatarPage/avatar/avatar';
import { WebDisplayMiddle } from '../components/avatarPage/webpage/WebDisplayMiddle';
import { StyleDisplay } from '../components/avatarPage/webpage/StyleDisplay';
import { styles, selectedToColor, selectedToStyle } from '../components/avatarPage/avatarProps';
import { HexColorPicker } from 'react-colorful';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../db/index';
import '../styles/AvatarCreation.css';

export const SelectedAttributeContext = createContext();

export const AvatarCreationPage = ({ prop }) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [selected, setSelected] = useState(0);
    const [avatarColorProps, setAvatarColorProps] = useState(null);
    const [avatarStyleProps, setAvatarStyleProps] = useState(null);

    useEffect(() => {
        if (user == null) {
            return;
        }
        db.collection('profiles')
            .doc(user.uid)
            .get()
            .then(document => {
                if (document.exists) {
                    const data = document.data();
                    setAvatarColorProps(data.avatar.colors);
                    setAvatarStyleProps(data.avatar.styles);
                }
            });
    }, []);

    function handleChange(color) {
        const key = selectedToColor[selected];
        const newProps = { ...avatarColorProps };
        newProps[key] = color;
        setAvatarColorProps(newProps);
    }

    function styleChange(styleNum) {
        const key = selectedToStyle[selected];
        const newProps = { ...avatarStyleProps };
        newProps[key] = styleNum;
        setAvatarStyleProps(newProps);
    }

    function updateAvatar() {
        const newColors = { ...avatarColorProps };
        const newStyles = { ...avatarStyleProps };
        const newAvatar = {
            styles: newStyles,
            colors: newColors,
        };

        db.collection('profiles')
            .doc(user.uid)
            .get()
            .then(document => {
                if (document.exists) {
                    const newData = {
                        ...document.data(),
                        avatar: newAvatar,
                        created_avatar: true,
                    };
                    updateDoc(doc(db, 'profiles', user.uid), newData);
                }
            });
    }

    return (
        <div
            className='main'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <div
                className='header'
                style={{
                    width: '100vw',
                    height: '5vh',
                    backgroundColor: '#ffffff',
                }}></div>
            {avatarColorProps != null && avatarStyleProps != null
                ? (<div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <SelectedAttributeContext.Provider
                        value={{ selected, setSelected }}>
                        <WebDisplayMiddle
                            avatar={
                                <Avatar
                                    {...avatarColorProps}
                                    {...avatarStyleProps}
                                    size='calc(50vh - 4px)'
                                />
                            }
                        />
                        <div style={{ display: 'flex', gap: '2vw' }}>
                            <button
                                className='avatarButton'
                                onClick={() => {
                                    const newProps = { ...avatarStyleProps };
                                    for (let index = 0; index < styles.length; index++) {
                                        const key = selectedToStyle[index];
                                        const styleIndex =
                                            Math.floor(Math.random() * styles[index].length) + 1;
                                        newProps[key] = styleIndex;
                                    }
                                    setAvatarStyleProps(newProps);
                                }}>
                                Randomize
                            </button>
                            <button
                                className='avatarButton'
                                onClick={() => {
                                    updateAvatar();
                                }}>
                                Submit
                            </button>
                        </div>
                    </SelectedAttributeContext.Provider>
                    <div
                        className='bottom'
                        style={{
                            height: '40vh',
                            width: '100vw',
                            backgroundColor: '#f8f8f8',
                            display: 'flex',
                        }}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                borderRight: '1px solid gray',
                                width: '20vw',
                                height: '100%',
                            }}>
                            <HexColorPicker
                                style={{ width: '25vh', height: '25vh' }}
                                color={avatarColorProps[selectedToColor[selected]]}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            style={{
                                width: '80vw',
                                height: '100%',
                            }}>
                            <div
                                style={{
                                    display: 'flex',
                                    overflowX: 'auto',
                                    height: '100%',
                                    width: '100%',
                                    justifyContent:
                                        styles[selected].length > 5 ? 'start' : 'center',
                                    alignItems: 'center',
                                }}>
                                <StyleDisplay
                                    curAvatarColors={avatarColorProps}
                                    curAvatarStyles={avatarStyleProps}
                                    styles={styles[selected]}
                                    selected={selected}
                                    styleChangeFunc={styleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>)
                : (<div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        textAlign: 'center',
                        fontSize: '2em',
                    }}>
                    {' '}
                    Loading...{' '}
                </div>
                )}
        </div>
    );
};
