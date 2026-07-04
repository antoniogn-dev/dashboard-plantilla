import { RiEdit2Line, RiShieldCheckFill } from "react-icons/ri"
import { useState, useRef } from "react"

const Profile = () => {

    const [imagen, setImagen] = useState<string>("/usuario2.jpg")
    const inputRef = useRef<HTMLInputElement>(null);

    // const handleClick = () => {
    //     inputRef.current?.click();
    // };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);
        setImagen(imageUrl);
    };


    return (
        <>
            <div className="bg-secondary-100 p-8 rounded-xl mb-8">
                <h1 className="text-xl text-gray-100">Profile Details</h1>
                <hr className="my-8 border-gray-500" />
                <form>
                    <div className="flex flex-col md:flex-row items-center mb-8">
                        <div className="w-1/4 flex justify-center md:justify-start">
                            <p>Avatar</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center md:items-start">
                            <div className="relative mb-2">
                                <img src={imagen} alt="usuario" className="size-28 object-cover rounded-lg " />
                                <label htmlFor="avatar" className="absolute bg-secondary-100 p-2 rounded-full -top-2 left-25 cursor-pointer">
                                    <RiEdit2Line />
                                </label>
                                <input type="file" id="avatar" ref={inputRef} className="hidden" accept="image/*" onChange={handleChange} />
                            </div>
                            <p className="text-gray-500 text-sm">Allowed file types: png, jpg, jpeg</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-8 gap-y-2">
                        <div className="w-full md:w-1/4">
                            <p>Nombre Completo <span className="text-red-500">*</span></p>
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full">
                            <div className="w-full">
                                <input type="text" placeholder="Nombre(s)" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Apellidos" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-8 gap-y-2">
                        <div className="w-full md:w-1/4">
                            <p>Empresa <span className="text-red-500">*</span></p>
                        </div>
                        <div className="flex-1 flex items-center gap-4 w-full">
                            <div className="w-full">
                                <input type="text" placeholder="Nombre de la empresa" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-8 gap-y-2">
                        <div className="w-full md:w-1/4">
                            <p>Numero de Contacto <span className="text-red-500">*</span></p>
                        </div>
                        <div className="flex-1 flex items-center gap-4 w-full">
                            <div className="w-full">
                                <input type="number" placeholder="Celular N#" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-y-2 items-center mb-8">
                        <div className="w-full md:w-1/4">
                            <p>Pagina Web </p>
                        </div>
                        <div className="flex-1 flex items-center gap-4 w-full">
                            <div className="w-full">
                                <input type="text" placeholder="Nombre de la empresa" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-y-2 items-center mb-8">
                        <div className="w-full md:w-1/4">
                            <p>País <span className="text-red-500">*</span></p>
                        </div>
                        <div className="flex-1 flex items-center gap-4 w-full">
                            <div className="w-full">
                                <select name="" id="" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                                    <option value="Argentina">Argentina</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Peru">Perú</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Estados-unidos">Estados Unidos</option>
                                    <option value="Mexico">Mexico</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>

                <hr className="my-8 border-gray-500" />

                <div className="flex items-center mb-8 ">
                    <div className="w-1/4 flex justify-end flex-1">
                        <button className="bg-primary flex-1 md:flex-0 text-secondary-900 py-2 px-4 rounded-lg mr-1 font-bold tracking-wide hover:bg-primary/50 transition-colors cursor-pointer ">Guardar</button>
                    </div>

                </div>
            </div >

            {/* card Password */}
            <div className="bg-secondary-100 p-8 rounded-xl">
                <h1 className="text-xl text-gray-100">Usuarios y Contraseñas</h1>
                <hr className="my-8 border-gray-500" />

                <div className="flex items-center flex-col md:flex-row justify-between">
                    <div className="w-full">
                        <p className="font-bold text-gray-200">Correo electronico</p>
                        <p className="text-gray-500">antoniodev2810@outlook.com</p>
                    </div>
                    <button className="bg-secondary-900 py-2 px-4 rounded-lg font-bold text-gray-500 mr-1 hover:bg-gray-800 transition-colors cursor-pointer w-full md:w-1/4 mt-2 md:mt-0">Cambiar Correo</button>
                </div>

                <hr className="my-8 border-gray-500" />


                <div>
                    <div className="flex items-center flex-col md:flex-row justify-between mb-8">
                        <div className="w-full">
                            <p className="font-bold text-gray-200">Contraseña</p>
                            <p className="text-gray-500">*******************</p>
                        </div>
                        <button className="bg-secondary-900 py-2 px-4 rounded-lg font-bold text-gray-500 mr-1 hover:bg-gray-800 transition-colors cursor-pointer w-full md:w-1/4 mt-2 md:mt-0">Cambiar Contraseña</button>
                    </div>

                    <div className="border border-dashed border-primary bg-primary/15 flex items-center justify-between flex-col md:flex-row p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                            <RiShieldCheckFill className="text-[40px] md:text-[30px] text-primary" />
                            <div>
                                <p className="font-bold text-lg text-center md:text-start">Cuenta segura</p>
                                <p className="text-gray-400 text-center md:text-start">Autenticación de  dos factores, adiciona seguridad extra a tu cuenta, para asegurarla necesitas proveer un codigo de seis dígitos.</p>
                            </div>
                        </div>
                        <button className="bg-primary py-2 px-4 rounded-lg font-bold text-gray-500 mr-1 hover:bg-primary/60 transition-colors cursor-pointer w-full md:w-1/8 mt-2 md:mt-0">Activar</button>
                    </div>
                </div>

                <hr className="my-8 border-gray-500" />

            </div >
        </>


    )
}
export default Profile