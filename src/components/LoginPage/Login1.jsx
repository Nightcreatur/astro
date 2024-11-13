import React from 'react';

import { Link } from 'react-router-dom';
import './Login.css';
import arrow from '../../assets/Left Arrow.svg'
import rarrow from '../../assets/Right Arrow.svg'

const Login = () => {
  return (
    <>

      <div className="signup-container">
        <div className="header">
          <Link className='arrow' to="/l2">
            <img src={arrow} alt="" />
          </Link>
        </div>
        <span className="signup-title">Sign Up</span>
        <div className="greeting">
          <h2>Hello <span className="username">Leo,</span></h2>
          <h4 >Share Your Details to Help Us Find Your Matches</h4>
        </div>
        <form className="signup-form">
          <label>Name</label>
          <input type="text" placeholder="Justin Walker" />

          <label>Time of Birth</label>
          <div className="time-input">
            <input type="text" placeholder="10:50 am" />

          </div>

          <label>Gender</label>
          <div className="gender-options">
            <label><input type="radio" name="gender" /> Male</label>
            <label><input type="radio" name="gender" /> Female</label>
            <label><input type="radio" name="gender" /> Other</label>
          </div>


        </form>
      </div>
      <div className='next' >
        <p>
          Let&#39;s start Dating
        </p>
        <Link to='/l3' ><button className='btn'><img src={rarrow} alt="" /></button></Link>
      </div>
    </>
  );
};

export default Login;
