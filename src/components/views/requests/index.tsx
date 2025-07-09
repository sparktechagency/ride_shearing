import { ArrowLeft, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PlaceholderImg } from "../../../lib/utils";
import { Button, Card, TableCell, TableRow } from "../../ui";
import { Table } from "../../reuseable/table";
import { useState } from "react";
import Modal from "../../reuseable/modal";
import nidfont from "../../../assets/nid-front.png"
import nidback from "../../../assets/nid-back.png"
import drivingFront from "../../../assets/driving-font.png"
import { Pagination } from "../../reuseable/pagination";


export default function RequestsDriver() {
    const [isPreview, setIsPreview] = useState(false)
    const [isIdentity, setIsIdentity] = useState(false)
    const [isDriving, setIsDriving] = useState(false)
    const headers = ["Sr. No", "Name", "Email", "Contact info", "NID/Passport", "Action"];
    const tableData = [
        {
            id: 1,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "abid.hasan@example.com",
            contact_info: "+880 1755 112233",
            nid_or_passport: "1234 5678 9012",
            avatar: PlaceholderImg(),
        },
        {
            id: 2,
            slNo: "002",
            name: "Fatema Akter",
            email: "fatema.akter@example.com",
            contact_info: "+880 1622 334455",
            nid_or_passport: "2345 6789 0123",
            avatar: PlaceholderImg(),
        },
        {
            id: 3,
            slNo: "003",
            name: "Naimur Rahman",
            email: "naimur.rahman@example.com",
            contact_info: "+880 1911 223344",
            nid_or_passport: "3456 7890 1234",
            avatar: PlaceholderImg(),
        },
        {
            id: 4,
            slNo: "004",
            name: "Sadia Jahan",
            email: "sadia.jahan@example.com",
            contact_info: "+880 1888 556677",
            nid_or_passport: "4567 8901 2345",
            avatar: PlaceholderImg(),
        },
        {
            id: 5,
            slNo: "005",
            name: "Jamal Hossain",
            email: "jamal.hossain@example.com",
            contact_info: "+880 1555 998877",
            nid_or_passport: "5678 9012 3456",
            avatar: PlaceholderImg(),
        },
        {
            id: 6,
            slNo: "006",
            name: "Sabina Yasmin",
            email: "sabina.yasmin@example.com",
            contact_info: "+880 1777 445566",
            nid_or_passport: "6789 0123 4567",
            avatar: PlaceholderImg(),
        },
        {
            id: 7,
            slNo: "007",
            name: "Rahim Uddin",
            email: "rahim.uddin@example.com",
            contact_info: "+880 1999 332211",
            nid_or_passport: "7890 1234 5678",
            avatar: PlaceholderImg(),
        },
        {
            id: 8,
            slNo: "007",
            name: "Rahim Uddin",
            email: "rahim.uddin@example.com",
            contact_info: "+880 1999 332211",
            nid_or_passport: "7890 1234 5678",
            avatar: PlaceholderImg(),
        },
        {
            id: 9,
            slNo: "007",
            name: "Rahim Uddin",
            email: "rahim.uddin@example.com",
            contact_info: "+880 1999 332211",
            nid_or_passport: "7890 1234 5678",
            avatar: PlaceholderImg(),
        }
    ];

    return (
        <div>
            <ul className="flex items-center justify-between pb-8">
                <li >
                    <Link className="font-medium flex items-center gap-1 cursor-pointer" to="/drivers">    <ArrowLeft size={16} />Back</Link>
                </li>
                <li className="w-fit lg:w-[500px]">
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="w-full bg-white pl-2 border-[1px] py-2 text-primary outline-0 placeholder:text-gray-300 placeholder:text-sm"
                            placeholder="Search for driver"
                        />
                        <div className="bg-[#5B7A7D] py-3 px-3 rounded-tr-xs rounded-br-xs text-white font-semibold transition-colors cursor-pointer">
                            <Search size={17} />
                        </div>
                    </div>
                </li>
                <li className="opacity-0">
                    4
                </li>
            </ul>
            <Table headers={headers}>
                {tableData.map((item, index) => (
                    <TableRow key={index} className="[&>td]:bg-white border-b-18 first:border-t-18 border-[#f3f5f7] [&>td]:pl-22">
                        <TableCell className="border-style">{item.slNo}</TableCell>
                        <TableCell className="relative after:absolute after:right-0 after:top-3 after:w-[1px] after:h-6 after:bg-[#b3b3b3]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                    <img
                                        src={item.avatar || "/placeholder.svg"}
                                        alt={item.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                </div>
                                <span className="text-sm font-medium text-gray-900">{item.name}</span>
                            </div>
                        </TableCell>
                        <TableCell className="border-style">{item.email}</TableCell>
                        <TableCell className="border-style">{item.contact_info}</TableCell>
                        <TableCell className="border-style">{item.nid_or_passport}</TableCell>
                        <TableCell className="flex gap-2">
                            <h1 onClick={() => setIsPreview(true)} className="border border-[#5B7A7D] px-3 py-1 rounded-xs cursor-pointer"> See Details</h1>
                        </TableCell>

                    </TableRow>
                ))}
            </Table>
            <ul className="flex flex-wrap justify-between items-center my-7">
                <li className="font-medium mb-2 lg:mb-0">Total: 10,258 parents</li>
                <li className="font-medium">
                    <Pagination page={1} onPageChange={() => { }} totalPage={10} per_page={2}></Pagination>
                </li>
            </ul>
            {/* preview */}
            <Modal open={isPreview} setIsOpen={setIsPreview} className="md:max-w-[700px] p-4">
                <div className="p-4 relative">

                    <div className="flex flex-col justify-center text-center mb-2">
                        <div className="size-20 mx-auto rounded-full overflow-hidden bg-gray-200">
                            <img
                                src={PlaceholderImg()}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className="text-base text-primary font-semibold">Imran Khan</h1>
                        <h1 className="text-sm text-primary">example@gmail.com</h1>
                    </div>

                    {/* Profile Section */}
                    <div className="flex flex-col gap-4 mb-1">
                    </div>

                    {/* Contact Information */}
                    <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                            <h2 className="font-medium">Contact Information:</h2>
                            <span className="text-sm text-gray-600">2567 4569 2347</span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Passport:</span>
                            </div>

                            <div onClick={() => {
                                setIsPreview(false)
                                setIsIdentity(true)
                            }} className="flex cursor-pointer justify-between items-center border px-2 py-1 rounded-sm">
                                <span className="text-sm">NID:</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">2589 2565 29774</span>
                                    <h1 className="bg-[#dddcdc] p-[2px] rounded-full"><ArrowRight className="w-4 h-4 rotate-[326deg] text-primary" /></h1>
                                </div>
                            </div>

                            <div onClick={() => {
                                setIsPreview(false)
                                setIsDriving(true)
                            }} className="flex cursor-pointer justify-between items-center border px-2 py-1 rounded-sm">
                                <span className="text-sm">Driving license:</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">2589 2565 29774</span>
                                    <h1 className="bg-[#dddcdc] p-[2px] rounded-full"><ArrowRight size={16} className="w-4 h-4 rotate-[326deg] text-primary" /></h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vehicle Information */}
                    <Card className="p-3 bg-[#f0f0f0] rounded-sm shadow-none border-none space-y-0">
                        <h3 className="font-medium text-center">Vehicle Information</h3>

                        <div className="space-y-1 mb-2">
                            <div className="flex justify-between">
                                <span className="text-sm font-medium">Vehicle Type:</span>
                                <span className="text-sm font-medium">Car</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-sm font-medium">Car Model:</span>
                                <span className="text-sm font-medium">Sujuki Maruti</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-sm font-medium">Year of manufacture:</span>
                                <span className="text-sm font-medium">2016</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-sm font-medium">Car Identification Number (VIN):</span>
                                <span className="text-sm font-medium">65141065541</span>
                            </div>
                        </div>

                        {/* Vehicle Pictures */}
                        <div>
                            <h4 className="font-medium text-center mb-2">Vehicle pictures</h4>
                            <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3, 4].map((index) => (
                                    <div key={index} className="bg-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src={PlaceholderImg()}
                                            alt={`Vehicle angle ${index}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                    <div className="flex justify-center gap-5">
                        <Button className="border-1 cursor-pointer border-[#FF0000] px-10 rounded-sm text-[#FF0000] hover:text-[#FF0000] font-medium" variant={"outline"}>Reject</Button>
                        <Button className=" px-10 cursor-pointer rounded-sm text-white font-medium bg-[#00B047] hover:bg-[#00B047]">Accept</Button>
                    </div>
                </div>
            </Modal>
            {/* Nid Modal */}
            <Modal open={isIdentity} setIsOpen={setIsIdentity} className="md:max-w-[700px] p-4">
                <div>
                    <ul className="flex justify-between items-center mb-5">
                        <li onClick={() => {
                            setIsPreview(true)
                            setIsIdentity(false)
                        }} className="font-medium flex items-center gap-1 cursor-pointer"><ArrowLeft size={16} />Back</li>
                        <li className="font-medium text-xl">National Identity Card (NID)</li>
                        <li className="opacity-0">5</li>
                    </ul>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div>
                            <Button variant={"main"} className="w-full rounded-sm mb-2">Front</Button>
                            <img className="border p-1 rounded-md" src={nidfont} alt="" />
                        </div>
                        <div>
                            <Button variant={"main"} className="w-full rounded-sm mb-2">Back</Button>
                            <img className="border p-1 rounded-md" src={nidback} alt="" />
                        </div>
                    </div>
                </div>
            </Modal>
            {/* Driving License Modal */}
            <Modal open={isDriving} setIsOpen={setIsDriving} className="md:max-w-[700px] p-4">
                <div>
                    <ul className="flex justify-between items-center mb-5">
                        <li onClick={() => {
                            setIsPreview(true)
                            setIsDriving(false)
                        }} className="font-medium flex items-center gap-1 cursor-pointer"><ArrowLeft size={16} />Back</li>
                        <li className="font-medium text-xl">Driving License</li>
                        <li className="opacity-0">5</li>
                    </ul>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div>
                            <Button variant={"main"} className="w-full rounded-sm mb-2">Front</Button>
                            <img className="border p-1 rounded-md" src={drivingFront} alt="" />
                        </div>
                        <div>
                            <Button variant={"main"} className="w-full rounded-sm mb-2">Back</Button>
                            <img className="border p-1 rounded-md" src={nidback} alt="" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
