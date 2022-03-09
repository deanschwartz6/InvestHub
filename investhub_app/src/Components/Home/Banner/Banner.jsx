import React from 'react';
import banner from '../../../Assets/banner-image.svg';
import styled from 'styled-components';

function Banner(){
    return (
        <BannerContent>
            <StyledImg src={banner} />
        </BannerContent>
    );
}

const BannerContent = styled.div` display: flex; `;

const StyledImg = styled.img.attrs({
    alt: 'Investhub hero banner',
})` max-width: 100%; `;

export default Banner;