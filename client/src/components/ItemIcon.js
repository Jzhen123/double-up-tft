import React from "react";
import { Tooltip } from 'primereact/tooltip';

export default ({ item, tooltipIdentifier }) => {
    return (
        <>
            <Tooltip target={`.img${tooltipIdentifier}`} mouseTrack mouseTrackLeft={10}>
                {item.name} - {item.desc}
            </Tooltip>

            <img className={`img${tooltipIdentifier}`} alt="logo" src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${item?.icon}`} height="80px" />
        </>
    );
}