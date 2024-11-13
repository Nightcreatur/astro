import React, { useState } from 'react';

import './Zodiac.css';
import { Link } from 'react-router-dom';
import rarrow from '../../assets/Right arrow.svg'
import larrow from '../../assets/Left arrow.svg'
import zodiac from '../../assets/zodiac.svg'



const ZodiacWheel = () => {


    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    const handleDateChange = (e) => {
        const value = e.target.value;
        if (value <= 31) setDate(value);
    };

    const handleMonthChange = (e) => {
        const value = e.target.value;
        if (value <= 12) setMonth(value);
    };

    const handleYearChange = (e) => {
        const value = e.target.value;
        if (value <= 2010) setYear(value);
    };

    return (
        <>
            <Link to='/' ><img className='larrow' src={larrow} alt="" /></Link>
            <div className="zodiac-wheel-container">
                <p>Input your date of birth and let the stars reveal your sign!</p>

                <div className="input-fields">
                    <input
                        type="number"
                        value={date}
                        onChange={handleDateChange}
                        placeholder="DD"
                    />

                    <input
                        type="number"
                        value={month}
                        onChange={handleMonthChange}
                        placeholder="MM"
                    />


                    <input
                        type="number"
                        value={year}
                        onChange={handleYearChange}
                        placeholder="YYYY"
                    />


                </div>
                <img src={zodiac} alt="" />




            </div>
            <div className='next' >
                <p>
                    Let&#39;s set up your profile
                </p>
                <Link to='/l3' ><button className='btn'><img src={rarrow} alt="" /></button></Link>
            </div>
        </>
    );
};

export default ZodiacWheel;
