import React from 'react';

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'w-100 d-flex justify-content-center align-items-center  foot'}>
                <div className={'w-50 d-flex justify-content-center flex-column align-items-center'}>
                    <h2>
                        Наш адрес:
                    </h2>
                    <div>
                        353177, КРАСНОДАРСКИЙ КРАЙ, КОРЕНОВСКИЙ Р-Н, ПЛАТНИРОВСКАЯ СТ-ЦА, КРАСНАЯ УЛ, 2, Б
                    </div>
                </div>
                <div className={'w-50 d-flex justify-content-center flex-column align-items-center'}>
                    <h2>
                        Контактная информация:
                    </h2>
                    <div>
                        univer_mupuniversal@mail.ru 8-(86142)-71-2-71
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