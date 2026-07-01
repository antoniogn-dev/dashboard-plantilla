import { RiMailLine} from "react-icons/ri"
import { Link } from "react-router-dom"


const ForgetPassword = () => {

    return (
        <div className="bg-secondary-100 p-8 rounded-xl shadow-lg shadow-primary w-auto lg:w-112.5">
            <h1 className="text-3xl uppercase font-bold tracking-[5px] text-primary mb-8 text-center">Recuperar Contraseña</h1>
            <form>

                <div className="relative mt-8">
                    <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
                    <input
                        type="email"
                        className="py-3 pl-8 pr-4 bg-secondary-900 outline-none rounded-lg w-full focus:border focus:border-primary"
                        placeholder="Correo electronico" />
                </div>

                <div>
                    <button type="submit" className="bg-primary/80 text-secondary-900 uppercase font-bold text-lg tracking-wider w-full py-3 px-4 rounded-lg hover:rounded-full hover:text-gray-600 transition-all duration-300 mt-8 cursor-pointer">Enviar Instrucciones</button>
                </div>
            </form>

            <div className="flex flex-col gap-4 items-center text-gray-100 mt-8">
                <span className="flex gap-2 items-center">
                    ¿Ya tienes cuenta?<Link to="/auth" className="text-primary hover:text-primary/80 transition-colors">Ingresa</Link>
                </span>

                <span className="flex gap-2 items-center">
                    ¿No tienes cuenta?<Link to="/auth/registro" className="text-primary hover:text-primary/80 transition-colors">Registrate</Link>
                </span>
            </div>
        </div>
    )
}
export default ForgetPassword