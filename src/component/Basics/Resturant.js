import React from 'react';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import "./style.css";

const Resturant = () => {

    const [menuData, setMenuData] = React.useState(Menu);

    const filteritem = (category) => {
        const updateList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updateList)
    }
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
                    <button className='btn-group__item' onClick={() => filteritem("breakfast")}>BreakFast</button>
                    <button className='btn-group__item' onClick={() => filteritem("lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filteritem("evening")}>Evening</button>
                    <button className='btn-group__item' onClick={() => filteritem("dinner")}>Dinner</button>
                </div>

            </nav>
            < MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant