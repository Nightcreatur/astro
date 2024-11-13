import ProfileCard from './ProfileCard';
import './ProfileGrid.css'
import setting from '../../assets/setting.svg'
import Profile1 from '../../assets/Picture1.jpg'
import Profile2 from '../../assets/Picture 2.jpg'
import Profile3 from '../../assets/Picture 3.jpg'
import Profile4 from '../../assets/Picture 4.jpg'
import Profile5 from '../../assets/Picture 5.jpg'

const profiles = [
    { name: 'Sarah Johnson', location: 'LA, California', image: Profile1 },
    { name: 'Hannah Baker', location: 'LA, California', image: Profile2 },
    { name: 'Diana', location: 'LA, California', image: Profile3 },
    { name: 'Grace', location: 'LA, California', image: Profile4 },
    { name: 'Lily', location: 'LA, California', image: Profile5 }
];

const ProfileGrid = () => {
    return (
        <>
            <div className='setting'>
                <img src={setting} alt="" />
            </div>

            <div className='gridContainer'>
                {profiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile} />
                ))}
            </div>
        </>
    );
};



export default ProfileGrid;
