import React, { useEffect, useState } from "react";

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
            {/* <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${url}`} /> */}
            {items.length > 0 ?
                items.map((item) => {
                    const url = item.icon.toLowerCase().replace('dds', 'png');
                    return (
                        <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${url}`} />
                    )
                })

                : null
            }
        </>
    );
}