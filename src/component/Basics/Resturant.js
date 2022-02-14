import React from 'react';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import "./style.css";

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
]

const Resturant = () => {

    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, SetMenuList] = React.useState(uniqueList);

    const filteritem = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateList)
    }
    return (
        <>
            <Navbar filteritem={filteritem} menuList={menuList} />
            < MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant