import { NavLink } from "react-router-dom";

const Navbar = () =>  {

    // const activeStyle = {
    //     textDecoration: 'underLine',
    // }

    const activeStyle = 'underline underline-offset-4'


    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>  
                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Clothes
                    </NavLink>
                </li>  
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Electronics
                    </NavLink>
                </li>  
                <li>
                    <NavLink 
                        to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Furnitures
                    </NavLink>
                </li>    
                <li>
                    <NavLink 
                        to='/toys'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Toys
                    </NavLink>
                </li>            
                <li>
                    <NavLink 
                        to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Others
                    </NavLink>
                </li>  
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                   ed@platzi.com
                </li>  
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        My Account
                    </NavLink>
                </li>  
                <li>
                    <NavLink 
                        to='/signin'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Sign In 
                    </NavLink>
                </li>  
                <li>
                    <NavLink 
                        to='/furnitures'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        carrito
                    </NavLink>
                </li>    
            </ul>
        </nav>
    )
};

export default Navbar