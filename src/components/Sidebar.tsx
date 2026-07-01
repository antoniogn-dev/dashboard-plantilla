import { Link } from "react-router-dom"
import { RiBarChart2Line, RiEarthLine, RiMailOpenLine, RiCalendar2Line, RiLogoutBoxRLine } from "react-icons/ri"

const Sidebar = () => {
    return (
        <div className="xl:h-screen overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-8 flex flex-col justify-between">
            <div>

                {/* Logo */}
                <div className="flex items-center justify-center gap-2 mb-10">
                    <img src="/logo.svg" alt="logo" className="h-8 w-8" />
                    <h1 className="text-center text-2xl font-bold text-white flex items-center">AntonioDev<span className="text-primary text-4xl flex items-center">.</span></h1>
                </div>

                {/* Navegacion */}
                <nav>
                    <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiBarChart2Line className="text-primary" /> Analiticas</Link>

                    <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiEarthLine className="text-primary" /> Redes Sociales</Link>

                    <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiMailOpenLine className="text-primary" /> Mensajes</Link>

                    <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiCalendar2Line className="text-primary" /> Calendario</Link>

                </nav>

            </div>

            <nav>
                <Link to="/" className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"><RiLogoutBoxRLine className="text-primary" /> Cerrar Sesión</Link>
            </nav>

        </div>
    )
}
export default Sidebar