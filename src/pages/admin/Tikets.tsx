import { Link } from "react-router-dom"
import { RiFilter2Fill, RiSearch2Line } from "react-icons/ri"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const Tikets = () => {
    return (
        <div>
            {/* title */}
            <div className="flex items-center justify-between gap-y-4 mb-10">
                <div>
                    <h1 className="font-bold text-gray-100 text-xl">Overview</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span> - </span>
                        <span>Support Center</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="bg-secondary-100 flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-primary transition-colors cursor-pointer tracking-wider">
                        <RiFilter2Fill />
                        Filter
                    </button>
                    <button className="bg-primary/50 text-black font-semibold tracking-wider flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-primary transition-colors cursor-pointer">
                        Create
                    </button>
                </div>

            </div>

            {/* Portada */}
            <div className="bg-secondary-100 p-8 rounded-tr-xl rounded-tl-xl grid grid-cols-1 md:grid-cols-2 items-center">

                <div className="p-8">
                    <h1 className="text-3xl mb-8 font-semibold">How Can We Help You?</h1>
                    <form action="" className="">
                        <div className="relative">
                            <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
                            <input type="text" className="bg-secondary-900 outline-none py-3 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full" placeholder="Search for anything" />
                        </div>
                    </form>
                </div>

                <div className="flex justify-center">
                    <img src="portada.svg" alt="portada" className="size-75 object-cover" />
                </div>

            </div>

            <TabGroup>
                <div className="bg-secondary-100 p-8 rounded-br-xl rounded-bl-xl flex items-center justify-between">
                    <TabList className="flex items-center justify-between gap-2 bg-secondary-900/50 py-3 px-4 rounded-lg w-full">
                        <div className="flex items-center gap-2">
                            <Tab className="data-selected:bg-secondary-900 data-selected:text-primary py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none">Overview</Tab>
                            <Tab className="data-selected:bg-secondary-900 data-selected:text-primary py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none">Tikets</Tab>
                            <Tab className="data-selected:bg-secondary-900 data-selected:text-primary py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none">FAQ</Tab>
                        </div>
                        <div>
                            <button className="bg-primary/50 text-black font-semibold tracking-wider flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-primary transition-colors cursor-pointer">
                                Create
                            </button>
                        </div>
                    </TabList>


                </div>
                <TabPanels>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                Popular Tikets
                            </div>
                            <div>
                                FAQ
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>Content 2</TabPanel>
                    <TabPanel>Content 3</TabPanel>
                </TabPanels>
            </TabGroup>

        </div>
    )
}
export default Tikets