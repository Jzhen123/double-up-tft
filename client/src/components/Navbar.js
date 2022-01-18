import React, { useState } from "react";
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from "react-router-dom";


export default () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', route: '/' },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil', route: '/edit' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file', route: '/documentation' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog', route: '/settings'}
    ];

    const onTabChangeHandler = (newTab) => {
        setActiveIndex(newTab.index);
        navigate(newTab.value.route);
    }

    return (
        <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => onTabChangeHandler(e)} />
    );
}