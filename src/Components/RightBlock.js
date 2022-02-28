import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const RightBlock = observer(() => {
    const {text} = useContext(Context)
    let main = '11111.........Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Aperiam autem cupiditate deleniti deserunt dolores illum in maiores' +
        ' minus nemo nihil nostrum omnis optio quae quam quasi qui quisquam,' +
        ' quod reiciendis repellendus soluta unde vero voluptates voluptatibus.' +
        ' Ab adipisci atque distinctio error illum obcaecati saepe tempore totam?' +
        ' Accusamus aperiam at aut beatae consequuntur cum cupiditate debitis,' +
        ' dignissimos esse est exercitationem in ipsa ipsam minima neque non numquam odit' +
        ' officia omnis perspiciatis quod recusandae repellat repudiandae saepe sapiente temporibus vel?' +
        ' Accusamus, aspernatur debitis dolor, dolores earum, error exercitationem fuga in ipsam libero mollitia' +
        ' necessitatibus pariatur quaerat quas quia quibusdam repellendus rerum sint soluta velit vero voluptas' +
        ' voluptatibus voluptatum! Deserunt dolor earum eius explicabo facere officia recusandae. Accusantium at' +
        ' delectus eum eveniet iste repellat similique, sit! A accusantium dolore doloremque fugit impedit ipsa' +
        ' laboriosam nihil placeat praesentium reiciendis tenetur veniam, voluptas? Aliquid asperiores et ratione' +
        ' rem voluptate. A animi aspernatur atque corporis cumque debitis dolorem ducimus esse facere' +
        ' id in inventore ipsum iusto maiores non numquam odio pariatur perferendis perspiciatis provident quae' +
        ' quaerat quam quas qui quia quidem quod reiciendis rerum sequi, similique sunt tenetur totam voluptate.' +
        ' Eaque earum est excepturi harum ipsum nostrum praesentium repellat veritatis? Dicta distinctio dolores' +
        ' iusto sed tempora.........11111'
    let noMain = '222222.........Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
        ' Aperiam autem cupiditate deleniti deserunt dolores illum in maiores' +
        ' minus nemo nihil nostrum omnis optio quae quam quasi qui quisquam,' +
        ' quod reiciendis repellendus soluta unde vero voluptates voluptatibus.' +
        ' Ab adipisci atque distinctio error illum obcaecati saepe tempore totam?' +
        ' Accusamus aperiam at aut beatae consequuntur cum cupiditate debitis,' +
        ' dignissimos esse est exercitationem in ipsa ipsam minima neque non numquam odit' +
        ' officia omnis perspiciatis quod recusandae repellat repudiandae saepe sapiente temporibus vel?' +
        ' Accusamus, aspernatur debitis dolor, dolores earum, error exercitationem fuga in ipsam libero mollitia' +
        ' necessitatibus pariatur quaerat quas quia quibusdam repellendus rerum sint soluta velit vero voluptas' +
        ' voluptatibus voluptatum! Deserunt dolor earum eius explicabo facere officia recusandae. Accusantium at' +
        ' delectus eum eveniet iste repellat similique, sit! A accusantium dolore doloremque fugit impedit ipsa' +
        ' laboriosam nihil placeat praesentium reiciendis tenetur veniam, voluptas? Aliquid asperiores et ratione' +
        ' rem voluptate. A animi aspernatur atque corporis cumque debitis dolorem ducimus esse facere' +
        ' id in inventore ipsum iusto maiores non numquam odio pariatur perferendis perspiciatis provident quae' +
        ' quaerat quam quas qui quia quidem quod reiciendis rerum sequi, similique sunt tenetur totam voluptate.' +
        ' Eaque earum est excepturi harum ipsum nostrum praesentium repellat veritatis? Dicta distinctio dolores' +
        ' iusto sed tempora.........222222'

    const [state, setState] = useState(null)
    useEffect(()=>{
        console.log('work')
            switch (text.page){
                case 'main':
                    setState(main);
                    break;
                case 'noMain':
                    setState(noMain)
                    break;
            }
        },[text.page])
    return (
        <div className={'rightBlock'}>
            <div className={'headerImage'}>
                <div className={'grad'}></div>
            </div>

            <div>
                {state}
            </div>
        </div>
    );
});

export default RightBlock;