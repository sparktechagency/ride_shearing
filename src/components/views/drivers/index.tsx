import { ArrowLeft, Eye, Search, Trash2 } from "lucide-react";
import { Button, Card, TableCell, TableRow } from "../../ui";
import { Table } from "../../reuseable/table";
import { PlaceholderImg } from "../../../lib/utils";
import { Pagination } from "../../reuseable/pagination";
import { useTitle } from "../../../hooks/title";
import { useEffect, useState } from "react";
import Modal from "../../reuseable/modal";
import { Star, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import rider from "../../../assets/ride2.png"
import nidfont from "../../../assets/nid-front.png"
import nidback from "../../../assets/nid-back.png"
import drivingFront from "../../../assets/driving-font.png"
import useConfirmation from "../../reuseable/delete-model";
import { Link } from "react-router-dom";

export default function Drivers() {
    const { confirm } = useConfirmation();
    const { setTitle, setSubtitle, title, subtitle } = useTitle();
    const [isPreview, setIsPreview] = useState(false)
    const [isIdentity, setIsIdentity] = useState(false)
    const [isDriving, setIsDriving] = useState(false)

    useEffect(() => {
        setTitle("Drivers");
        setSubtitle("You can see here all the drivers those use your application to earn money");
    }, [setTitle, setSubtitle]);
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

    const handleDelete = async (id: string) => {
        const confirmed = await confirm();
        if (confirmed) {
            console.log(id)
        }
    };

    return (
        <div>
            <ul className="lg:hidden mb-3">
                <li className="text-2xl font-bold text-primary">{title}</li>
                <li className="text-sm text-gray-600">{subtitle}</li>
            </ul>
            <ul className="flex items-center justify-between pb-8">
                <li className="w-fit lg:w-[400px]">
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
                <li>
                    <Link to="/request-driver">
                        <Button className="bg-[#5B7A7D] rounded-xs h-full py-[10px] hover:bg-[#5B7A7D] cursor-pointer">
                            Requests (10)
                        </Button>
                    </Link>
                </li>
            </ul>

            <div>
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
                                <div onClick={() => setIsPreview(!isPreview)} className="bg-[#fff3eb] text-white px-2 py-1 w-fit rounded-md cursor-pointer"><Eye className="text-[#F96D10]" /></div>
                                <div onClick={() => handleDelete(item.email)} className="bg-[#ffe5e5] text-white px-2 py-1 w-fit rounded-md cursor-pointer"><Trash2 size={20} className="text-[#ff0000]" /></div>
                            </TableCell>

                        </TableRow>
                    ))}


                </Table>
                {/* pagination section */}
                <ul className="flex flex-wrap justify-between items-center my-7">
                    <li className="font-medium mb-2 lg:mb-0">Total: 10,258 parents</li>
                    <li className="font-medium">
                        <Pagination page={1} onPageChange={() => { }} totalPage={10} per_page={2}></Pagination>
                    </li>
                </ul>
            </div>
            {/* is Preview */}
            <Modal open={isPreview} setIsOpen={setIsPreview} className="md:max-w-[700px] p-4">
                <div className="p-4 relative">

                    <div className="flex justify-between">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                            <img
                                src={PlaceholderImg()}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Account Balance */}
                        <div className="bg-teal-100 px-4 py-1 rounded-md h-fit mr-4">
                            <div className="text-xs text-primary text-end">Account Balance</div>
                            <div className="text-xl font-bold text-[#000000] text-end">$500</div>
                        </div>

                    </div>

                    {/* Profile Section */}
                    <div className="flex flex-col gap-4 mb-1">


                        <div className="flex-1">
                            <h1 className="text-base text-primary font-semibold mb-1">Imran Khan</h1>
                            <div className="flex items-center gap-1 mb-2">
                                <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                                <span className="text-sm">4.5</span>
                            </div>

                            <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-primary">example@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-primary">2589 4569 3654</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-primary">4206 AVALON BLVD, Los Angeles</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex gap-4 my-2">
                        <div className="flex items-center gap-2  bg-[#DFF1F2] px-3 py-1 rounded-sm">
                            <img src={rider} className="size-5 text-[#5B7A7D]" />
                            <span className="text-sm font-medium text-[#5B7A7D]">500 Rides</span>
                        </div>

                        <div className="flex items-center gap-2 bg-[#DFF1F2] px-3 py-1 rounded-sm">
                            <Star className="w-5 h-5 text-[#5B7A7D]" />
                            <div className="text-sm">
                                <div className="font-medium text-[#5B7A7D]">4.5 Star</div>
                                <div className="text-sm text-[#5B7A7D]">260 reviews</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border-1 border-[#5B7A7D] px-3 py-1 rounded-sm">
                            <span className="font-medium text-sm text-[#5B7A7D]">See Rides</span>< ArrowRight size={18} className="w-4 h-4 rotate-[326deg] text-[#5B7A7D]" />

                        </div>
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
    );
}
