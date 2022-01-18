import React, { useState } from "react";
import { TabMenu } from 'primereact/tabmenu';
import { useLocation, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button'

import SelectRegion from './SelectRegion';

import './Navbar.css';

const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', route: '/' },
    { label: 'Admin', icon: 'pi pi-fw pi-database', route: '/admin' },
    { label: 'Top Comps', icon: 'pi pi-fw pi-users', route: '/comps' },
    { label: 'Leaderboards', icon: 'pi pi-fw pi-globe', route: '/leaderboards' },
    { label: 'Login', icon: 'pi pi-fw pi-user', route: '/login' },
    {
        label: 'Search',
        template: () => {
            return (
                <div style={{ marginTop: 5, marginLeft: 20 }}>
                    <div className="p-inputgroup">
                        <SelectRegion />
                        <InputText placeholder="Search Summoner" type="text" />
                        <Button icon="pi pi-search" className="p-button" />
                    </div>
                </div>
            );
        },
    }
];

export default () => {
    const navigate = useNavigate();
    const url = useLocation();
    const [activeIndex, setActiveIndex] = useState(url.pathname === '/' ? 0 : items.findIndex(item => item.route === url.pathname));

    const onTabChangeHandler = (newTab) => {
        setActiveIndex(newTab.index);
        navigate(newTab.value.route);
    }

    return (
        <TabMenu
            model={items}
            activeIndex={activeIndex}
            onTabChange={(e) => onTabChangeHandler(e)}
        />
    );
}