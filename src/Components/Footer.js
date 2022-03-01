import React from 'react';

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'w-100 d-flex justify-content-center'}>
                <div className={'w-50 d-flex justify-content-center flex-column align-items-center'}>
                    <h2>
                        Наш адрес:
                    </h2>
                    <div>
                        353206, КРАСНОДАРСКИЙ КРАЙ.
                    </div>
                </div>
                <div className={'w-50 d-flex justify-content-center flex-column align-items-center'}>
                    <h2>
                        Контактная информация:
                    </h2>
                    <div>
                        353206, КРАСНОДАРСКИЙ КРАЙ.
                    </div>
                </div>

            </div>
            <hr color={'#fff'} width={'100%'}/>
            <div className={'w-100  justify-content-center align-items-center'}>
                <div className={'text-center'}>
                    © 2022 Copyright
                </div>
            </div>
        </div>

    );
};

export default Footer;