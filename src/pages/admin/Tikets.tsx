import { Link } from "react-router-dom"
import { RiFilter2Fill, RiSearch2Line, RiArrowRightLongFill, RiArrowUpSLine } from "react-icons/ri"
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

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
                <TabPanels className="mt-8">
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* tikets */}
                            <div className="bg-secondary-100 p-8 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-gray-100 text-2xl mb-8">Popular tikets</h1>
                                    <Link className="flex items-center text-primary gap-2" to="/">Support <RiArrowRightLongFill /></Link>
                                </div>
                                <div>
                                    <Disclosure as="div" className="p-6" defaultOpen={true}>
                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                                                What is your refund policy?
                                            </span>
                                            <RiArrowUpSLine className="size-5  fill-primary group-data-hover:fill-primary/50 group-data-open:rotate-180 transition-all duration-300" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 text-sm/5 text-white/50 px-8 py-2">
                                            If you're unhappy with your purchase, we'll refund you in full, by kennthemes to save tons and more to time money projects are listed and outstanding check out <Link to="/" className="text-primary/60 hover:text-primary">Learn more</Link>
                                        </DisclosurePanel>
                                    </Disclosure>

                                    <Disclosure as="div" className="p-6">
                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                            <span className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
                                                What is your refund policy?
                                            </span>
                                            <RiArrowUpSLine className="size-5  fill-primary group-data-hover:fill-primary/50 group-data-open:rotate-180 transition-all duration-300" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 text-sm/5 text-white/50 px-8 py-2">
                                            If you're unhappy with your purchase, we'll refund you in full, by kennthemes to save tons and more to time money projects are listed and outstanding check out <Link to="/" className="text-primary/60 hover:text-primary">Learn more</Link>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </div>
                            </div>
                            <div className="bg-secondary-100 p-8 rounded-xl">
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