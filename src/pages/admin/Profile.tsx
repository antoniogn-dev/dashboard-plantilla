import { RiEdit2Line } from "react-icons/ri"


const Profile = () => {
    return (
        <div className="bg-secondary-100 p-8 rounded-xl">
            <h1 className="text-xl text-gray-100">Profile Details</h1>
            <hr className="my-8 border-gray-500" />
            <form>
                <div className="flex items-center mb-8">
                    <div className="w-1/4">
                        <p>Avatar</p>
                    </div>
                    <div className="flex-1">
                        <div className="relative mb-2">
                            <img src="/usuario2.jpg" alt="usuario" className="size-28 object-cover rounded-lg " />
                            <label htmlFor="avatar" className="absolute bg-secondary-100 p-2 rounded-full -top-2 left-25 cursor-pointer">
                                <RiEdit2Line />
                            </label>
                            <input type="file" id="avatar" className="hidden" />
                        </div>
                        <p className="text-gray-500 text-sm">Allowed file types: png, jpg, jpeg</p>
                    </div>
                </div>

                <div className="flex items-center mb-8">
                    <div className="w-1/4">
                        <p>Nombre Completo <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full">
                            <input type="text" placeholder="Nombre(s)" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="Apellidos" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-8">
                    <div className="w-1/4">
                        <p>Empresa <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full">
                            <input type="text" placeholder="Nombre de la empresa" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-8">
                    <div className="w-1/4">
                        <p>Numero de Contacto <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full">
                            <input type="number" placeholder="Celular N#" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-8">
                    <div className="w-1/4">
                        <p>Pagina Web </p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full">
                            <input type="text" placeholder="Nombre de la empresa" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center mb-8">
                    <div className="w-1/4">
                        <p>País <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full">
                            <select name="" id="" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                                <option value="Argentina">Argentina</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Peru" selected>Perú</option>
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
        </div>
    )
}
export default Profile