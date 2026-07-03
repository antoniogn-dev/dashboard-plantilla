import { RiNotification3Line, RiArrowDropDownLine, RiSettings2Line, RiLogoutBoxRLine, RiThumbUpLine } from "react-icons/ri"
import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="h-[6vh] border-b border-secondary-100 p-4 flex items-center justify-end">
            <nav className="flex items-center gap-x-2">

                {/* Menu notificaciones */}
                <Menu>
                    <MenuButton className="relative hover:bg-gray-800 p-2 rounded-lg transition-colors cursor-pointer">
                        <RiNotification3Line className="size-5" />
                        <span className="absolute top-0 right-0 bg-primary py-0.5 px-1 text-black rounded-full text-[9px] box-content font-bold">2</span>
                    </MenuButton>

                    <MenuItems anchor="bottom end" className={`px-6 py-4 bg-secondary-100 border-0 origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0`} transition >
                        <h1 className="text-gray-300 font-bold">Notificaciones</h1>

                        <MenuSeparator className="my-4 h-px bg-gray-500" />

                        <MenuItem>
                            <Link to="/perfil" className="data-focus:bg-secondary-900 flex gap-4 items-center px-4 rounded-xl py-2 transition-colors duration-300" >
                                <img src="/usuario1.jpg" alt="usuario" className="size-8 object-cover rounded-full" />
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-semibold">Claudia Medina Cuadros</span> <span className="text-[14px] text-gray-400">10/06/2026</span>
                                    </div>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet consec...</p>
                                </div>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/perfil" className="data-focus:bg-secondary-900 flex gap-4 items-center px-4 rounded-xl py-2 transition-colors duration-300" >
                                <img src="/usuario2.jpg" alt="usuario" className="size-8 object-cover rounded-full" />
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-semibold">Gabriela Serpa</span> <span className="text-[14px] text-gray-400">14/05/2026</span>
                                    </div>
                                    <p className="text-gray-500">Lorem ipsum dolor consectetur adipisicing</p>
                                </div>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/perfil" className="data-focus:bg-secondary-900 flex gap-4 items-center px-4 rounded-xl py-2 transition-colors duration-300" >
                                <RiThumbUpLine className="p-2 bg-amber-600 text-white box-content rounded-full" />
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Nuevo like!</span>
                                        <span className="text-[14px] text-gray-400">30/06/2026</span>
                                    </div>
                                    <p className="text-gray-500">A Gabriela Serpa le guta to pub...</p>
                                </div>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/perfil" className="data-focus:bg-secondary-900 flex gap-4 items-center px-4 rounded-xl py-2 transition-colors duration-300" >
                                <img src="/usuario3.jpg" alt="usuario" className="size-8 object-cover rounded-full" />
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="font-semibold">Fiorella Boggio Figaro</span>
                                        <span className="text-[14px] text-gray-400">22/06/2026</span>
                                    </div>
                                    <p className="text-gray-500">Lorem ipsum dolor sit amet...</p>
                                </div>
                            </Link>
                        </MenuItem>

                        <MenuSeparator className="my-4 h-px bg-gray-500" />

                        <MenuItem>
                            <Link to="/" className="text-gray-500 text-sm hover:text-white/50 transition-colors">Leer todas las notificaciones</Link>
                        </MenuItem>
                    </MenuItems>
                </Menu>

                {/* menu usuario */}
                <Menu>
                    <MenuButton className="flex items-center gap-x-2 hover:bg-gray-800 py-2 px-4 rounded-lg transition-colors cursor-pointer border-0">
                        <img src="/hombre.jpg" alt="usuario" className="size-6 object-cover rounded-full" />
                        <span>Antonio Gutierrez Noriega</span>
                        <RiArrowDropDownLine className="size-7" />
                    </MenuButton>

                    <MenuItems anchor="bottom end" className={`px-6 py-4 bg-secondary-100 border-0`}>
                        <MenuItem>
                            <Link to="/perfil" className="data-focus:bg-secondary-900 flex gap-4 items-center px-4 rounded-xl py-2" >
                                <img src="/hombre.jpg" alt="usuario" className="size-8 object-cover rounded-full" />
                                <div className="flex flex-col">
                                    <span>Antonio Gutierrez Noriega</span>
                                    <span className="text-[12px] text-gray-400 text-center">antoniodev2810@outlook.com</span>
                                </div>
                            </Link>
                        </MenuItem>
                        <div className="my-4 h-px bg-white/20" />
                        <MenuItem>
                            <Link to="/configuracion" className="data-focus:bg-secondary-900 flex gap-4 items-center px-4 rounded-xl py-2" >
                                <RiSettings2Line className="text-primary"/>
                                <span>Configuración</span>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/configuracion" className="data-focus:bg-secondary-900 flex gap-4 items-center px-4 rounded-xl py-2" >
                                <RiLogoutBoxRLine className="text-primary" />
                                <span>Cerrar Sesión</span>
                            </Link>
                        </MenuItem>
                    </MenuItems>








                </Menu>
            </nav>
        </header>
    )
}
export default Header