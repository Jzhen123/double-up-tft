import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

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
            <Tooltip target="customClassName" mouseTrack mouseTrackLeft={10} />
            {items.length > 0 ?
                items.map((item, index) => {
                    let num = index.toString();
                    return (
                        <>
                            <Tooltip target={`.img${num}`}>
                                {item.name} - {item.desc}
                            </Tooltip>

                            <img className={`img${num}`} alt="logo" src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${item?.icon}`} height="80px" />
                        </>
                    )
                })
                : null}

        </>

    );
}