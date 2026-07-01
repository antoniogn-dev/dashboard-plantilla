import { useState } from "react"
import { RiMailLine, RiLock2Line, RiEyeLine, RiEyeOffLine, RiUser3Line } from "react-icons/ri"
import { Link } from "react-router-dom"


const Register = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-lg shadow-primary w-auto lg:w-112.5">
      <h1 className="text-3xl uppercase font-bold tracking-[5px] text-primary mb-8 text-center">Crear Cuenta</h1>
      <form>
        <button
          className="flex items-center gap-2 bg-secondary-900 w-full justify-center py-3 px-4 rounded-full cursor-pointer">
          <img src="/google-logo.png" className="w-4 h-4" />
          Registrate con Google
        </button>

        <div className="relative mt-8">
          <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="text"
            className="py-3 pl-8 pr-4 bg-secondary-900 outline-none rounded-lg w-full focus:border focus:border-primary"
            placeholder="Nombres" />
        </div>

        <div className="relative mt-4">
          <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="text"
            className="py-3 pl-8 pr-4 bg-secondary-900 outline-none rounded-lg w-full focus:border focus:border-primary"
            placeholder="Apellidos" />
        </div>

        <div className="relative mt-4">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className="py-3 pl-8 pr-4 bg-secondary-900 outline-none rounded-lg w-full focus:border focus:border-primary"
            placeholder="Correo electronico" />
        </div>

        <div className="relative mt-4">
          <RiLock2Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 pl-8 pr-4 bg-secondary-900 outline-none rounded-lg w-full focus:border focus:border-primary"
            placeholder="Contraseña" />

          {showPassword ? (
            <RiEyeLine onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary" />
          ) : (
            <RiEyeOffLine onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary" />
          )}

        </div>

        <div className="relative mt-4">
          <RiLock2Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 pl-8 pr-4 bg-secondary-900 outline-none rounded-lg w-full focus:border focus:border-primary"
            placeholder="Confirmar contraseña" />

          {showPassword ? (
            <RiEyeLine onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary" />
          ) : (
            <RiEyeOffLine onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary" />
          )}

        </div>

        <div>
          <button type="submit" className="bg-primary/80 text-secondary-900 uppercase font-bold text-lg tracking-wider w-full py-3 px-4 rounded-lg hover:rounded-full hover:text-gray-600 transition-all duration-300 mt-8 cursor-pointer">Registrarme</button>
        </div>
      </form>

      <span className="flex gap-2 items-center justify-center mt-4">
        ¿Ya tienes cuenta?<Link to="/auth" className="text-primary hover:text-primary/80 transition-colors">Ingresar</Link>
      </span>
    </div>
  )
}
export default Register