import React from 'react';


const ProfileCard = ({ profile }) => {
    return (
        <div style={styles.cardContainer}>
            <img src={profile.image} alt={profile.name} style={styles.image} />
            <div style={styles.overlay}>
                <h4 style={styles.name}>{profile.name}</h4>
                <p style={styles.location}>{profile.location}</p>
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        position: 'relative',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    overlay: {
        position: 'absolute',
        bottom: '0',

        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(7px)',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
    },
    name: {
        margin: 0,
        fontSize: '16px',
    },
    location: {
        margin: 0,
        fontSize: '12px',
        color: 'white'
    }
};

export default ProfileCard;
