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
        {title: 'Главная', items:[{text:'История', value:'mainHistory'}, {text: 'Руководство', value:'mainBoss'}, {text: 'Фото галерея', value:'mainGallery'}], value:'main'},
        {title: 'Водоснабжение', items:[{text: 'Нормативные правила', value:'waterInRules'}, {text:'Текущие показатели', value:'waterInData'}], value:'waterIn'},
        {title: 'Водоотведение', items:[{text: 'Характеристика и текущие показатели', value:'waterOutCharacter'}, {text: 'Текущие показатели', value:'waterOutData'}], value:'waterOut'},
        {title: 'Подключение к сетям водоснабжения и водоотведения', items:[{text: 'Порядок подключения', value:'connectWaterInOutAlgoritm'}, {text: 'Документы', value:'connectWaterInOutDocumentation'}], value:'connectWaterInOut'},
        {title: 'Для абонентов', items:[{text: 'Информация по оплате', value:'forAbonentsInfo'}, {text: 'Расценки по прочим видам деятельности', value:'forAbonentsPrice'}], value:'forAbonents'},
        {title: 'Раскрытие информации', items:[{text: 'Тарифы по воодснабжению и водоотведению', value:'priceWaterInOut1'}], value:'waterInOut'},
        {title: 'Контакты', items:[{text: 'Ответственные лица', value:'contactsPersonal'}, {text: 'Обратная связь', value:'contactsConnections'}], value:'contacts'}
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
            <div className={'d-flex flex-column align-items-center'}>
                <hr className={'w-100'}/>
                <h2>Новости</h2>
                <p className={'w-75 m-auto'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi non quaerat quia, rem suscipit
                    voluptas. Ab accusantium adipisci aperiam at atque consequuntur culpa dolore doloribus earum eveniet
                    expedita fuga ipsam ipsum iste iure iusto numquam obcaecati odio officia omnis optio pariatur
                    possimus provident quae quaerat reiciendis tempore temporibus, ullam voluptate!</p>
                <hr className={'w-100'}/>
            </div>
        </div>
    );
});

export default LeftBlock;