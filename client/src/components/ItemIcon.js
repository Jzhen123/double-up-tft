import React from "react";
import { Tooltip } from 'primereact/tooltip';
import parse from 'html-react-parser';


export default ({ item, items, tooltipIdentifier }) => {
    const parsedDescription = parse(item.desc);
    const recipeFirstItem = item.from.length ? items[(items.findIndex(el => el.id == item.from[0]))].icon : null
    const recipeSecondItem = item.from.length ? items[(items.findIndex(el => el.id == item.from[1]))].icon : null
    const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/';

    return (
        <>
            <Tooltip target={`.img${tooltipIdentifier}`} mouseTrack mouseTrackLeft={10} >
                <div className="surface-1 p-2 border-round">
                    <div className="text-3xl font-medium mb-1">
                        <div className="grid">
                            <div className="col-fixed" style={{ width: "50px", marginRight: "10px" }}>
                                <img className={`img${tooltipIdentifier}`} alt="logo" src={url + item?.icon} width="50px" />
                            </div>
                            <div className="col pb-0">
                                <div className="grid pt-0 pb-0">
                                    <div className="col-12 pb-1">
                                        <p className="text-xl m-0">
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className="col-12 pt-1" >
                                        <p className="text-sm m-0">
                                            +10 AD +10 AP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="font-medium mb-1" style={{ maxWidth: "50ch" }}>
                        {parsedDescription}
                    </div>

                    {item.from.length > 0 &&
                        <div className="font-medium m-0" style={{ maxWidth: "50ch" }}>
                            <br />
                            Made from
                            <img alt="logo" src={url + recipeFirstItem} width="30px" />
                            +
                            <img alt="logo" src={url + recipeSecondItem} width="30px" />
                        </div>
                    }
                </div>
            </Tooltip>

            <img className={`img${tooltipIdentifier} m-2`} alt="logo" src={url + item?.icon} style={{ borderRadius: '20%' }} height="80px" />
        </>
    );
}