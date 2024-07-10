import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'; import "./burger-menu.css"


const BurgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div className="burger-menu" onClick={toggleMenu}>
            {/* <MenuIcon fontSize='large' isOpen={isOpen} /> */}
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
    );
};
const Menu = ({ isOpen }) => {
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skilld_sec">Skills</a>
            <a href="#projects_sec">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    );
};

function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="App">
            <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            <Menu isOpen={isOpen} />
        </div>
    );
}
export default MenuBar