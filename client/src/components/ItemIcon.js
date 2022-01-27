import React from "react";
import { Tooltip } from 'primereact/tooltip';
import parse from 'html-react-parser';


export default ({ item, tooltipIdentifier }) => {
    const parsedDescription = parse(item.desc);

    return (
        <>
            <Tooltip target={`.img${tooltipIdentifier}`} mouseTrack mouseTrackLeft={10} >
                <div className="surface-1 p-2 border-round">
                    <div className="text-3xl font-medium mb-1">
                        <div className="grid">
                            <div className="col-fixed" style={{ width: "50px", marginRight: "10px" }}>
                                <img className={`img${tooltipIdentifier}`} alt="logo" src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${item?.icon}`} width="50px" />
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


                </div>
            </Tooltip>

            <img className={`img${tooltipIdentifier}`} alt="logo" src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/${item?.icon}`} height="80px" />
        </>
    );
}