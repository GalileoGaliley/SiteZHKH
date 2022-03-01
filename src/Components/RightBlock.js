import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const RightBlock = observer(() => {
    let table = <table className={'table1 m-auto'}>
        <tbody className={'text-center'}>
        <tr>
            <td>Наименование установленного оборудования</td>
            <td>Производительность м3/ча</td>
        </tr>
        <tr>
            <td>1</td>
            <td>4</td>
        </tr>
        <tr>
            <td>1. артскважина СОШ№25 №2791, ул. К.Маркса 25</td>
            <td>25</td>
        </tr>
        <tr>
            <td>2. артскважина ОСО №535Д, ул. Горького 25</td>
            <td>25</td>
        </tr>
        <tr>
            <td>3. артскважина СОШ№5 №4707, ул. Третьякова 25</td>
            <td>25</td>
        </tr>
        <tr>
            <td>4. артскважина «Черемушки»№115, ул. Советская 16</td>
            <td>16</td>
        </tr>
        <tr>
            <td>5. артскважина «Автогараж» №339-Д, ул.Охотничья 16</td>
            <td>16</td>
        </tr>
        <tr>
            <td>6. артскважина «Склад 2» №4125, ул. Кучерявого 25</td>
            <td>25</td>
        </tr>
        <tr>
            <td>7. артскважина «д/с Сказка» №418Д, ул.Кирова 25</td>
            <td>25</td>
        </tr>
        <tr>
            <td>8. артскважина Хлебозавод №4792, ул.Советская</td>
            <td>16</td>
        </tr>
        </tbody>
    </table>;
    let table2 = <table className="iksweb">
        <tbody className={'table2 italic '}>
        <tr>
            <td>Режим работы:</td>
        </tr>
        <tr>
            <td>понедельник</td>
        </tr>
        <tr>
            <td>Абонентский отдел с 8.00 до 16.00</td>
        </tr>
        <tr>
            <td>Касса с 8.00 до 15.00</td>
        </tr>
        <tr>
            <td>перерыв с 12.00 до 13.00</td>
        </tr>
        <tr>
            <td>Вторник-пятница</td>
        </tr>
        <tr>
            <td>Абонентский отдел с 8.00 до 16.00</td>
        </tr>
        <tr>
            <td>Касса с 8.00 до 16.00</td>
        </tr>
        <tr>
            <td>перерыв с 12.00 до 13.00</td>
        </tr>
        <tr>
            <td>Суббота</td>
        </tr>
        <tr>
            <td>Касса с 8.00 до 12.00</td>
        </tr>
        <tr>
            <td>выходные дни: воскресенье.</td>
        </tr>
        <tr>
            <td>Дополнительная информация: тел. 8-(86142)-71-2-71</td>
        </tr>
        </tbody>
    </table>;
    let forAbonentsPrice = <table className="iksweb table1">
        <tbody>
        <tr className={'fw-bold '}>
            <td>№п/п</td>
            <td>Наименование услуги</td>
            <td>Цена,руб.</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Вызов слесаря для обследования повреждения</td>
            <td>981,00
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Опломбирование водомера (вторичное)</td>
            <td>828,00</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Установка водомера
            </td>
            <td>3295,00</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Демонтаж водомера для проведения поверки</td>
            <td>1899,00</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Монтаж водомера после проведения поверки
            </td>
            <td>1348,00</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Замена водомера</td>
            <td>1439,00</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Подготовительные работы по присоединению к магистральному водопроводу</td>
            <td>11655,00</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Отсоединение от магистрального водопровода по заявлению абонента</td>
            <td>6192,00</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Изготовление хомутов</td>
            <td>2708,00</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Сварочные работы 1час</td>
            <td>540,00</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Работа САГ 1 час</td>
            <td>1375,00</td>
        </tr>
        <tr>
            <td>12</td>
            <td>Услуги по скашиванию сорной растительности триммером 1 сотка</td>
            <td>312,00</td>
        </tr>
        <tr>
            <td>13</td>
            <td>Скашивание сорной растительности трактором МТЗ с косилкой КРН-2,1 (1 час)</td>
            <td>1234,00</td>
        </tr>
        <tr>
            <td>14</td>
            <td>Работа экскаватора МТЗ «Беларус» (1час)</td>
            <td>1576,00</td>
        </tr>
        <tr>
            <td>15</td>
            <td>Работа трактора МТЗ (1 час)</td>
            <td>979,00</td>
        </tr>
        <tr>
            <td>16</td>
            <td>Уборка территории трактором с метлой для организаций</td>
            <td>1436,00</td>
        </tr>
        <tr>
            <td>17</td>
            <td>Услуги на пахоту огородов в ЛПХ(1 сотка)
            </td>
            <td>455,00</td>
        </tr>
        <tr>
            <td>18</td>
            <td>Услуги на предоставление автобуса HYUNDAI (1 ч)</td>
            <td>1369,00</td>
        </tr>
        <tr>
            <td>19</td>
            <td>Услуги на предоставление автобуса HYUNDAI (время ожидания)</td>
            <td>667,00</td>
        </tr>
        <tr>
            <td>20</td>
            <td>Выполнение работ по продувке и промывке канализационной сети</td>
            <td>5080,00</td>
        </tr>
        <tr>
            <td>21</td>
            <td>Выполнение работ по продувке и промывке канализационной сети свыше 25 м</td>
            <td>7903,00</td>
        </tr>
        <tr>
            <td>22</td>
            <td>Подвоз воды спец. транспортом ГАЗ 3309 КО-503В2</td>
            <td>1249,00</td>
        </tr>
        <tr>
            <td>23</td>
            <td>Стоимость 1 часа работы а/м ЗИЛ-130 по очистке снега</td>
            <td>2060,00</td>
        </tr>
        <tr>
            <td>24</td>
            <td>Стоимость 1 часа работы а/м ЗИЛ-130 по разбрасыванию ГПС</td>
            <td>7151,00</td>
        </tr>
        <tr>
            <td>25</td>
            <td>25 Работа бульдозера ДТ - 75</td>
            <td>4320,00</td>
        </tr>
        <tr>
            <td>26</td>
            <td>Подвоз воды и полив спец. транспортом ГАЗ 3309 КО-503В2</td>
            <td>2113,00</td>
        </tr>
        <tr>
            <td>27</td>
            <td>Услуги по предоставлению автомобиля Газель(ожидание)</td>
            <td>499,00</td>
        </tr>
        <tr>
            <td>28</td>
            <td>Услуги по предоставлению автомобиля Газель</td>
            <td>1065,00</td>
        </tr>
        </tbody>
    </table>
    const {text} = useContext(Context)
    let main = <span><p>Действующая команда управленцев - это высококвалифицированные специалисты, имеющие профильное образование и большой опыт работы.</p><p>Директор Степанченко Юрий Михайлович</p><p>Главный энергетик Мушкаренко Валерий Михайлович</p><p>Главный бухгалтер Черевко Елена Юрьевна</p></span>;
    let waterInRules = <span><p>Для удовлетворения потребностей населения ст. Платнировской водой питьевого качества, отвечающей требованиям СанПиН 1.2.3685-21, используются подземные источники в виде скважин с погружными насосами.</p><p>В Российской Федерации качество питьевой водопроводной воды должно удовлетворять требованиям СанПиН 1.2.3685-21 «Гигиенические нормативы и требования к обеспечению безопасности и (или) безвредности для человека факторов среды обитания», срок действия ограничен 01.03.2027. Новые санитарные правила объединили в себе множество ранее действующих гигиенических нормативов и санитарных норм в единый документ.</p><p>Новый документ содержит нормативы качества и безопасности воды, в том числе показатели ее радиационной безопасности, предельно допустимые концентрации веществ в системах водоснабжения.</p></span>;
    let waterInData = <span><p>В настоящее время водоснабжение станицы Платнировской осуществляется путем подачи воды из артезианских источников за счет централизованной системы водоснабжения, которая включает в себя артезианские скважины, насосные второго подъема, водонапорные башни, водопроводные сети. Добыча воды производится с помощью скважинных погружных глубинных насосов.</p><p>Общая протяженность сетей водоснабжения на территории Платнировского сельского поселения составляет - 81,6 км. В настоящий период на балансе стоит 8 артезианских скважин глубиной 120-186 м, находящихся в разных частях станицы.</p><div><p>Перечень водозаборов, их производственные мощности.</p>{table}</div><p>На предприятии имеются:</p><p>- лицензии на право добычи подземных вод: КРД № 03746 ВЭ, сроком до 18 августа 2034 года и КРД №81584ВЭ, сроком до 19 октября 2045 года;</p><p>- тех. паспорта на водозаборы;</p><p>- санитарно-эпидемиологические заключения на использование артезианских скважин.</p><div><p>МУП «Универсал» обеспечивает питьевой водой население, бюджетные учреждения и прочие организации на территории станицы Платнировской. Фактический объем добываемой воды объектами ВКХ за 2021г. составил 403 тыс. м³.</p><p>За последние годы в связи с высоким уровнем износа проводится ежегодная замена старого стального трубопровода на новый пластиковый, периодически производится замена насосов на артезианских скважинах.</p></div></span>;
    let waterOutCharacter = <span><p>Одним из основных регулируемых видов деятельности МУП «Универсал» является оказание услуг населению, бюджетным учреждениям и прочим организациям на территории станицы Платнировской по сбору и отведению сточных вод. Централизованным водоотведением обеспечены жители микрорайона Черемушки и центральная часть станицы.</p><p>Общая протяженность сетей на территории Платнировского сельского поселения составляет в сфере водоотведения – 22 км. Водоотведение в ст. Платнировской состоит из самотечной и напорной канализации, станций перекачки (КНС).

Протяженность самотечных сетей составляет 6 км, напорной канализации 16 км, диаметр труб 219 мм.</p><p>Сточные воды по самотечной канализации стекаются в централизованную КНС, расположенную по ул. Кооперативная, и, далее через промежуточную канализационную станцию, расположенную на территории бригады № 1, перекачиваются в очистные сооружения г. Кореновск по напорному коллектору.</p><p>Жидкие бытовые отходы из септиков частного сектора и предприятий автотранспортом вывозятся в приемный колодец, откуда после отстоя перекачиваются на очистные сооружения г. Кореновск.

Договор водоотведения заключили – 690 абонентов. Объем водоотведения за 2021 г. составил 27,4 м³.</p></span>;
    let forAbonentsInfo = <span><p>МУП Платнировский «Универсал» напоминает Вам о необходимости установки индивидуальных приборов учета воды в соответствии с Федеральным Законом РФ № 261-ФЗ «Об энергосбережении…» и предлагает выполнение данных работ.</p><p>Постановлением Правительства РФ от 06 мая 2011 года № 354 "О предоставлении коммунальных услуг собственникам и пользователям помещений в многоквартирных домах и жилых домов" установлено, что собственники и пользователи жилых помещений и домов обязаны установить приборы учета воды, а так же своевременно осуществлять их поверку и замену.</p><p>При отсутствии прибора учета воды, а равно при истечении срока его поверки начисление за пользование холодным водоснабжением осуществляется исходя из норматива потребления и положений приказа РЭК Краснодарского края от 31 августа 2012 года № 2/2012-нп.</p><p><span className={'italic'}>Злостным неплательщикам</span> в случае непогашения задолженности по оплате, предоставление услуги водоснабжения будет сначала ограниченно, а затем приостановлено на основании постановления Правительства РФ №354 от 06.05.2011г. На злостных неплательщиков организация подает в суд.</p> <div><h3>По вопросу погашения задолженности обращаться по адресу:</h3><br/><p>353177, КРАСНОДАРСКИЙ КРАЙ, КОРЕНОВСКИЙ Р-Н, ПЛАТНИРОВСКАЯ СТ-ЦА, КРАСНАЯ УЛ, 2, Б</p>{table2}</div><p>Администрация МУП Платнировский «Универсал»

Срок оплаты: с 1 по 25 число ежемесячно. Пеня начисляется с 10 числа месяца, следующего за расчетным месяцем.</p><p>При нарушении сроков предоставления показаний прибора учета и оплаты, абонента рассчитывают по нормативу, соответствующему условиям проживания (согласно ФЗ №-416 «О водоснабжении и водоотведении» и приказу РЭК Краснодарского края от 31 августа 2012 года № 2/2012-нп).</p></span>;
    let noMain = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum cumque, debitis eos excepturi perspiciatis quidem ullam. Alias aliquid at atque commodi consectetur cumque debitis delectus dolore doloremque dolores ea, eaque facilis fugiat incidunt ipsa laboriosam molestiae odio officiis perferendis perspiciatis possimus provident, quo quod rem repellendus soluta ullam veniam vero voluptas voluptatum? Accusamus, deleniti dolorem dolores ea facere ipsa non, porro quis quisquam ratione sequi tenetur totam velit? Aperiam atque delectus deleniti dicta dolorum earum ex facere, impedit inventore ipsa ipsum itaque laborum odio odit optio perferendis perspiciatis provident, quos recusandae repudiandae rerum sit unde vel veritatis voluptatem. Culpa dicta earum id iusto natus quibusdam ratione suscipit veniam. Esse illo minus nam porro quae quasi sequi tempora ut voluptates voluptatum. Autem consectetur eius eligendi eos esse ex excepturi, explicabo facilis impedit ipsa ipsum itaque laboriosam nemo, optio, porro sequi totam ut velit. Amet animi autem commodi dicta fugit hic illum itaque, laudantium nam, pariatur perspiciatis porro quibusdam reiciendis repellat soluta veritatis voluptas? Corporis necessitatibus, quis. Ab accusamus animi aspernatur blanditiis distinctio dolorem esse, excepturi explicabo fuga hic ipsam iure labore maxime minus nisi omnis quaerat quibusdam reiciendis repellendus soluta tempora temporibus veniam voluptates. Dolor doloribus odio placeat provident sed.'

    const [state, setState] = useState(null)
    useEffect(()=>{
        console.log('work')
        console.log(text.page)
            switch (text.page){
                case 'main':
                    setState(main);
                    break;
                case 'noMain':
                    setState(noMain)
                    break;
                case 'waterInRules':
                    setState(waterInRules)
                    break;
                case 'waterInData':
                    setState(waterInData)
                    break;
                case 'waterOutCharacter':
                    setState(waterOutCharacter)
                    break;
                case 'forAbonentsInfo':
                    setState(forAbonentsInfo)
                    break;
                case 'forAbonentsPrice':
                    setState(forAbonentsPrice)
                    break;
            }
        },[text.page]);
    return (
        <div className={'rightBlock'}>
            <div className={'headerImage'}>
                <div className={'grad'}></div>
            </div>

            <div>
                <h1>МУП Платнировский «Универсал»</h1>
                {state}
            </div>
        </div>
    );
});

export default RightBlock;