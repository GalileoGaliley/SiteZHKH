import React, {useContext} from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const DropItem = observer(({i}) => {
    const {text} = useContext(Context)
    return (
        <DropdownButton className={'DropItem'} title={i.title}   variant={'myVariant'} >
            {i.items.map((item)=><Dropdown.Item className={'dripOtem'} onClick={()=>{text.setPage(item.value);text.setTitle(item.text)}} eventKey="1">{item.text}</Dropdown.Item>)}
        </DropdownButton>
    );
});

export default DropItem;