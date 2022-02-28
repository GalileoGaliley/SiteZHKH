import React, {useContext, useState} from 'react';
import DropItem from "./DropItem";
import image from '../Images/logoWithoutBG.png'
import {Dropdown} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
const LeftBlock = observer(() => {

    const {text} = useContext(Context)
    const [open, setOpen] = useState('close');

    let arr = [
        {title: 'Главная', items:['История','Руководство', 'Фото галерея'], value:'main'},
        {title: 'Водоснабжение', items:['Нормативные правила', 'Текущие показатели'], value:'noMain'},
        {title: 'Водоотвеления', items:['Характеристика','Текущие показатели'], value:'noMain'},
        {title: 'Подключение к сетям водоснабжения и водоотведения', items:['Порядок подключения',' Документы'], value:'main'},
        {title: 'Для абонентов', items:['Расценки по прочим видам деятельности', 'Полив'], value:'noMain'},
        {title: 'Раскрытие информации', items:['Тарифы по воодснабжению и водоотведению'], value:'main'},
        {title: 'Контакты', items:['Ответственные лица', 'Обратная связь'], value:'noMain'}
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
                }}>(=)</button>
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
});

export default LeftBlock;