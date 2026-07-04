import { Link } from "react-router-dom"
import { RiBarChart2Line, RiEarthLine, RiHeadphoneLine, RiCalendar2Line, RiLogoutBoxRLine, RiArrowDropRightLine, RiMenuFill, RiCloseLargeLine } from "react-icons/ri"
import { useState } from "react"

const Sidebar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showSubMenu, setShowSubMenu] = useState(false)

    return (
        <>
            <div className={`xl:h-screen overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-8 flex flex-col justify-between z-50 ${showSubMenu ? "left-0" : "-left-full"} transition-all duration-400`}>
                <div>

                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2 mb-10">
                        <img src="/logo.svg" alt="logo" className="h-8 w-8" />
                        <h1 className="text-center text-2xl font-bold text-white/80 flex items-center">AntonioDev</h1>
                    </div>

                    {/* Navegacion */}
                    <ul>
                        <li>
                            <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiBarChart2Line className="text-primary" /> Analiticas</Link>
                        </li>

                        <li>
                            <button onClick={() => setShowMenu(!showMenu)} className="flex w-full items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">

                                <span className="flex items-center gap-4">
                                    <RiEarthLine className="text-primary" />Redes Sociales
                                </span>

                                <RiArrowDropRightLine className={`mt-1 size-6 text-primary ${showMenu && "rotate-90"} transition-all`} />

                            </button>

                            <ul className={`${showMenu ? "h-32.5" : "h-0"} overflow-y-hidden transition-all duration-500`}>
                                <li>
                                    <Link to="/" className="py-2 px-4 border-l border-gray-600 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:left-[-6.7px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">Post red social</Link>
                                </li>

                                <li>
                                    <Link to="/" className="py-2 px-4 border-l border-gray-600 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:left-[-6.7px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">Estadisticas</Link>
                                </li>

                                <li>
                                    <Link to="/" className="py-2 px-4 border-l border-gray-600 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:left-[-6.7px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors">Perfiles</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/tikets" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiHeadphoneLine className="text-primary" /> Soporte Técnico</Link>
                        </li>

                        <li>
                            <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiCalendar2Line className="text-primary" /> Calendario</Link>
                        </li>

                    </ul>

                </div>

                {/* Cerrar sesion */}
                <nav>
                    <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiLogoutBoxRLine className="text-primary" /> Cerrar Sesión</Link>
                </nav>

            </div>

            <button onClick={() => setShowSubMenu(!showSubMenu)} className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50">
                {showSubMenu ? <RiCloseLargeLine /> : <RiMenuFill />}
            </button>
        </>
    )
}
export default Sidebar