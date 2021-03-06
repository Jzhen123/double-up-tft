import React, { useEffect, useState } from "react";
import ItemIcon from "../components/ItemIcon";

import { getAllItems } from "../api/item";

export default () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await getAllItems();
        setItems(response);
        console.log(response);
    }


    return (
        <>
            {items.length > 0 ?
                items.map((item, i) =>
                    <ItemIcon key={i} item={item} items={items} tooltipIdentifier={i.toString()} />
                )
            : null}
        </>

    );
}