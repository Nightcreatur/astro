import React from 'react'
import { useState } from 'react';
import './Profile.css'
import arrow from '../../assets/Right arrow.svg'
import leftArrow from '../../assets/Left Arrow.svg'
import { Link } from 'react-router-dom';

const ProfileSetup = () => {
    const [images, setImages] = useState([null, null]);

    const handleImageUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const newImages = [...images];
            newImages[index] = imageUrl;
            setImages(newImages);
        }
    };

    return (<>

        <div className="app-container">

            <div className="app-content">
                <Link to='/l'> <img className='leftarrow' src={leftArrow} alt="" /></Link>
                <h4>Sign Up</h4>
                <h1>Hello <span className="highlight">Leo,</span></h1>
                <p>Share Your Details to Help Us Find Your Matches</p>

                <div className="pictures-container">
                    <p>Pictures</p>
                    <div className="pictures-grid">
                        {images.map((image, index) => (
                            <div key={index} className="picture-slot">
                                {image ? (
                                    <img src={image} alt={`Uploaded ${index + 1}`} className="uploaded-image" />
                                ) : (
                                    <label className="upload-label">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload(e, index)}
                                            style={{ display: "none" }}

                                        />
                                        <span className="plus-icon">+</span>
                                    </label>
                                )}
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </div>
        <div className="start-btn">
            <p>Let&#39;s start Dating</p>
            <Link to='/home' ><button className='btn'><img src={arrow} alt="" /></button></Link>


        </div>
    </>
    );
}

export default ProfileSetup