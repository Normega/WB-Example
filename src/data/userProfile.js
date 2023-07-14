export function getUserDefaultProfile(uid, fullName, email) {
    const userProfile = {
        uid,
        fullName,
        email,
        services: [],
        description: '',
        streaks: 0,
        checkin: false,
        quarterlyCheckin: false,
        avatar: {
            styles: {
                earType: 1,
                eyeType: 1,
                eyebrowType: 1,
                faceType: 1,
                hairType: 1,
                mouthType: 1,
                noseType: 1,
                shirtType: 1,
            },
            colors: {
                avatarBackgroundColor: '#b0d1b9',
                eyeColor: '#99562a',
                eyebrowColor: '#99562a',
                hairColor: '#99562a',
                mouthColor: '#99562a',
                noseColor: '#99562a',
                shirtColor: '#5f3e09',
                skinColor: '#e29e68',
            },
        },
        created_avatar: false,
    };

    return userProfile;
}
