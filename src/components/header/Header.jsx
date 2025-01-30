import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, Home, Info, Mail } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            <nav className="shadow px-4 md:px-6 bg-white h-[50px] fixed w-full z-50">
                <div className="flex items-center h-full">
                    
                    <div className="flex items-center gap-7 flex-1">
                      
                        <div className="text-lg font-bold">Logo</div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex gap-7">
                            <Link to="" className="nav-link hover:text-black hover:underline flex items-center gap-2">
                                <Home className="h-4 w-4" />
                                Home
                            </Link>
                            <Link to="About" className="nav-link hover:text-black hover:underline flex items-center gap-2">
                                <Info className="h-4 w-4" />
                                About
                            </Link>
                            <Link to="Contact" className="nav-link hover:text-black hover:underline flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                Contact
                            </Link>
                        </div>
                    </div>

                   
                    <div className="hidden md:block">
                        <Link to="#" className="nav-link bg-black text-white border-2 border-black px-2 py-1.5 rounded-md cursor-pointer hover:bg-gray-100 hover:text-black transition flex items-center gap-2">
                            <LogIn className="h-4 w-4" />
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden lg-hidden p-2 hover:bg-gray-100 rounded-md"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-[50px] bg-white z-40 md:hidden">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link
                            to=""
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-black hover:underline rounded-md"
                            onClick={toggleMenu}
                        >
                            <Home className="h-5 w-5" />
                            Home
                        </Link>
                        <Link
                            to="About"
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-black hover:underline rounded-md"
                            onClick={toggleMenu}
                        >
                            <Info className="h-5 w-5" />
                            About
                        </Link>
                        <Link
                            to="Contact"
                            className="flex items-center gap-2 p-2 hover:bg-gray-100 hover:text-black hover:underline rounded-md"
                            onClick={toggleMenu}
                        >
                            <Mail className="h-5 w-5" />
                            Contact
                        </Link>
                        <Link
                            to="#"
                            className="flex items-center gap-2 bg-black text-white p-2 rounded-md hover:bg-gray-800 transition"
                            onClick={toggleMenu}
                        >
                            <LogIn className="h-5 w-5" />
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;