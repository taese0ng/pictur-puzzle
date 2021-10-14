import React, {useState} from 'react';
import Presenter from './Presenter';
import {Item} from './index';

function Body () {
    const [items, setItems] = useState<Item[]>([
        {id:0, isFind: false, x:210, y:110},
        {id:1, isFind: false, x:350, y:140},
        {id:2, isFind: false, x:190, y:230}
    ])

    const findError = (selectItem: Item) => {
        const result = items.map(item => {
            if(item.id === selectItem.id){
                item.isFind = true;
            }
            return item;
        })

        console.log(result)

        setItems(result);
    }

    const count = () => {
        const result = items.filter((item)=> !item.isFind);

        return result.length;
    }

    return <Presenter count={count} findError={findError} items={items}/>
}

export default Body;