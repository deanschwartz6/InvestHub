import React from 'react';
import banner from '../../../Assets/banner-image.svg';
import './banner.css';

function Banner(){
    return (
        <div className="banner-content">
            <img src={banner} alt="InvestHub Banner" id="investhub-banner" />
        </div>
    );
}

export default Banner;