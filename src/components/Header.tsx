import { RiNotification3Line, RiArrowDropDownLine } from "react-icons/ri"
//import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="h-[6vh] border-b border-secondary-100 p-4 flex items-center justify-end">
            <nav className="flex items-center gap-x-2">
                <button className="relative hover:bg-gray-800 p-2 rounded-lg transition-colors cursor-pointer">
                    <RiNotification3Line className="size-5" />
                    <span className="absolute top-0 right-0 bg-primary py-0.5 px-1 text-black rounded-full text-[9px] box-content font-bold">2</span>
                </button>

                <button className="flex items-center gap-x-2 hover:bg-gray-800 py-2 px-4 rounded-lg transition-colors cursor-pointer">
                    <img src="/hombre.jpg" alt="usuario" className="size-6 object-cover rounded-full" />
                    <span>Antonio Gutierrez Noriega</span>
                    <RiArrowDropDownLine className="size-7" />
                </button>
            </nav>
        </header>
    )
}
export default Header