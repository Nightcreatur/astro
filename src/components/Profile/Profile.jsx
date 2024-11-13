import React from 'react';
import './Profile.css';
import Profile1 from '../../assets/Picture1.jpg'

const Profile = () => {
    return (
        <div className="profile-page">

            <div className="profile-header">
                <img
                    src={Profile1}
                    alt="Profile"
                    className="profile-picture"
                />
                <div className="profile-info">
                    <h2>Zach Dempsey</h2>
                    <p>LA, California</p>
                </div>
            </div>


            <div className="about-me">
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
                <div className="interests">
                    <span>design</span>
                    <span>books</span>
                    <span>coffee</span>
                    <span>films</span>
                    <span>photography</span>
                </div>
            </div>


            <div className="image-gallery">
                <div className="image-grid">
                    <div className="large-image">
                        <img src={Profile1} alt="Large Image" />
                    </div>
                    <div className="small-image">
                        <img src={Profile1} alt="Small Image 1" />
                    </div>
                    <div className="small-image">
                        <img src={Profile1} alt="Small Image 2" />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;
