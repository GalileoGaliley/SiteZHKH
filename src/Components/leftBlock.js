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
        {title: 'Главная', items:[{title:'title',text:'История', value:'mainHistory'}, {title:'title',text: 'Руководство', value:'mainBoss'}, {title:'title',text: 'Фото галерея', value:'mainGallery'}], value:'main'},
        {title: 'Водоснабжение', items:[{title:'title',text: 'Нормативные правила', value:'waterInRules'}, {title:'title',text:'Текущие показатели', value:'waterInData'}], value:'waterIn'},
        {title: 'Водоотведение', items:[{tetle:'title',text: 'Характеристика и текущие показатели', value:'waterOutCharacter'}], value:'waterOut'},
        {title: 'Подключение к сетям водоснабжения и водоотведения', items:[{title:'title',text: 'Порядок подключения', value:'connectWaterInOutAlgoritm'}, {title:'title',text: 'Документы', value:'connectWaterInOutDocumentation'}], value:'connectWaterInOut'},
        {title: 'Для абонентов', items:[{title:'title',text: 'Информация по оплате', value:'forAbonentsInfo'}, {title:'title',text: 'Расценки по прочим видам деятельности', value:'forAbonentsPrice'}], value:'forAbonents'},
        {title: 'Раскрытие информации', items:[{title:'title',text: 'Тарифы по воодснабжению и водоотведению', value:'priceWaterInOut1'}], value:'waterInOut'},
        {title: 'Контакты', items:[{title:'title',text: 'Ответственные лица', value:'contactsPersonal'}, {title:'title',text: 'Обратная связь', value:'contactsConnections'}], value:'contacts'}
    ]
    return (
        <div className={'leftBlock '}>
            <div className={'logo'}>
                <img src={image}/>
            </div>
            <div className={'d-flex flex-column align-items-center'}>
                <h2>Форма обратной связи</h2>
                <div className={'openMenu'} onClick={()=>{
                    if (open == 'close'){
                        setOpen('open')
                    }else{
                        setOpen('close')
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                <div className={`menu ${open}`} >
                    {arr.map((item)=>
                        <DropItem i={item} />
                    )}
                </div>


            </div>

        </div>
    );
});

export default LeftBlock;