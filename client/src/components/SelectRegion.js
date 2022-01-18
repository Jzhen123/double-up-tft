import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default () => {
    const [selectedRegion, setSelectedRegion] = useState({ name: 'NA' });

    const onRegionChange = (e) => {
        setSelectedRegion(e.value);
    }

    const regions = [
        { name: 'BR' },
        { name: 'EUNE' },
        { name: 'EUW' },
        { name: 'JP' },
        { name: 'KR' },
        { name: 'LAN' },
        { name: 'LAS' },
        { name: 'NA' },
        { name: 'OCE' },
        { name: 'TR' },
        { name: 'RU' },
    ];

    const selectedRegionTemplate = (option) => (
        <div className="country-item country-item-value">
            <div>{option.name}</div>
        </div>
    );

    const countryOptionTemplate = (option) => (
        <div className="country-item">
            <div>{option.name}</div>
        </div>
    );

    return (
        <Dropdown
            value={selectedRegion}
            options={regions}
            onChange={onRegionChange}
            optionLabel="name"
            scrollHeight={'60vh'}
            style={{ minWidth: '120px' }}
            valueTemplate={selectedRegionTemplate}
            itemTemplate={countryOptionTemplate}
        />
    )
}