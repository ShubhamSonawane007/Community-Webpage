import React, { useState } from 'react';
import Button from './Button';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleCategoryClick = () => {
        // Handle category click action here
    };

    const links = [
        { name: "HOME", link: "/" },
        { name: "FORUMS", link: "/" },
        { name: "LATEST PROJECTS", link: "/", dropdown: true },
        { name: "POPULAR TAGS", link: "/" },
        // Add more links as needed
    ];

    const categories = [
        { name: "FullStack", link: "/" },
        { name: "HTML & CSS", link: "/" },
        { name: "JavaScript", link: "/" },
        { name: "React", link: "/" },
        { name: "App Development", link: "/" },
        { name: "AI/ML", link: "/" },
        // Add more categories as needed
    ];

    return (
        <div className={`shadow-md w-full top-0 left-0 z-20 ${open ? 'h-auto' : ''}`}> {/* Ensure Navbar is on top */}
            <div className={`md:flex items-center justify-between bg-white py-4 md:px-10 px-7 relative z-20 ${open ? 'mb-16' : ''}`}> {/* Position relative for dropdown */}
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Community
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-30'> {/* Ensure menu icon is above everything */}
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {links.map((link) => (
                        <li key={link.name} className={`md:ml-8 text-xl md:my-0 my-7 ${link.dropdown ? 'relative' : ''}`}>
                            {link.dropdown ? (
                                <>
                                    <span className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer" onClick={toggleDropdown}>
                                        {link.name}
                                    </span>
                                    {link.dropdown && showDropdown && (
                                        <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-md z-20"> {/* Ensure Dropdown is above */}
                                            {categories.map((category) => (
                                                <li key={category.name} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleCategoryClick}>
                                                    <a href={category.link}>{category.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            )}
                        </li>
                    ))}
                    <Button>
                        Log In
                    </Button>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
