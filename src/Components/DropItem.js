import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";

const DropItem = ({i}) => {
    return (
        <DropdownButton className={'DropItem'} title={i.title} drop={'end'} variant={'myVariant'} >
            {i.items.map((item)=><Dropdown.Item eventKey="1">{item}</Dropdown.Item>)}
        </DropdownButton>
    );
};

export default DropItem;