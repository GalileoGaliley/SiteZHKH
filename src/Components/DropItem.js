import React, {useContext} from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const DropItem = observer(({i}) => {
    const {text} = useContext(Context)
    return (
        <DropdownButton onClick={()=>{text.setPage(i.value);
            console.log(text)}} className={'DropItem'} title={i.title} drop={'end'} variant={'myVariant'} >
            {i.items.map((item)=><Dropdown.Item eventKey="1">{item}</Dropdown.Item>)}
        </DropdownButton>
    );
});

export default DropItem;