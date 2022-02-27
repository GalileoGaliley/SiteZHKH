import React, {useState} from 'react';
import DropItem from "./DropItem";
import image from '../Images/logoWithoutBG.png'
import {Dropdown} from "react-bootstrap";
const LeftBlock = () => {
    const [open, setOpen] = useState('close');

    let arr = [
        {title: 'Главная', items:['История','Руководство', 'Фото галерея']},
        {title: 'Водоснабжение', items:['Нормативные правила', 'Текущие показатели']},
        {title: 'Водоотвеления', items:['Характеристика','Текущие показатели']},
        {title: 'Подключение к сетям водоснабжения и водоотведения', items:['Порядок подключения',' Документы']},
        {title: 'Для абонентов', items:['Расценки по прочим видам деятельности', 'Полив']},
        {title: 'Раскрытие информации', items:['Тарифы по воодснабжению и водоотведению']},
        {title: 'Контакты', items:['Ответственные лица', 'Обратная связь']}
    ]
    return (
        <div className={'leftBlock '}>
            <div className={'logo'}>
                <img src={image}/>
            </div>
            <div className={'d-flex flex-column align-items-center'}>
                <h2>Форма обратной связи</h2>
                <button className={'openMenu'} onClick={()=>{
                    if (open == 'close'){
                        setOpen('open')
                    }else{
                        setOpen('close')
                    }
                }}>(.)(.)</button>
                <div className={`menu ${open}`} >
                    {arr.map((item)=>
                        <DropItem i={item} />
                    )}
                </div>


            </div>
            <div className={'d-flex flex-column align-items-center'}>
                <hr className={'w-100'}/>
                <h2>Новости</h2>
                <hr className={'w-100'}/>
            </div>
        </div>
    );
};

export default LeftBlock;