import React from 'react';
import image from "../Images/nvrsk.jpeg";

const Header = () => {
    return (
        <>
            <div className={'d-flex header'}>
                <div className={'logo'}>
                    <img src={image}/>
                </div>

            </div>
        </>
    );
};

export default Header;