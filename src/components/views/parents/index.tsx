import { ArrowLeft, Eye, Funnel, MapPin, Search, Trash2 } from "lucide-react";
import { Button, TableCell, TableRow,Table, TableBody} from "../../ui";
import { Table as Tables } from "../../reuseable/table";
import { PlaceholderImg } from "../../../lib/utils";
import { Pagination } from "../../reuseable/pagination";
import { useTitle } from "../../../hooks/title";
import { useEffect, useState } from "react";
import Modal from "../../reuseable/modal";
import { FromInput } from "../../reuseable/from-input";
import Form from "../../reuseable/from";
import { useForm, type FieldValues } from "react-hook-form";
import TransactionsCard from "../../reuseable/transaction-card";
import useConfirmation from "../../reuseable/delete-model";


export default function Parents() {
    const { confirm } = useConfirmation();
    const { setTitle, setSubtitle, title, subtitle } = useTitle();
    const [isOpen, setIsOpen] = useState(false)
    const [isPreview, setIsPreview] = useState(false)
    const [seeOpen, setSeeOpen] = useState(false)

    useEffect(() => {
        setTitle("Parents");
        setSubtitle("You can see here all the parents those use your application");
    }, [setTitle, setSubtitle]);
    const headers = ["Sl. No", "Name", "Email", "Address", "Action"];

    const tableData = [
        {
            id: 1,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
        {
            id: 2,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
        {
            id: 3,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
        {
            id: 4,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
        {
            id: 5,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
        {
            id: 6,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
        {
            id: 7,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
        {
            id: 8,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
        {
            id: 9,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "example@gmail.com",
            address: "New york, USA",
            avatar: PlaceholderImg(),
        },
    ]

    // add question
    const from = useForm({
        defaultValues: {
            filter: ""
        },
    });
    const hanldeSubmit = async (values: FieldValues) => {
        console.log(values);
    };

    const rides = Array(3).fill({
        driverName: "Md. Abid Hasan",
        timestamp: "10-2-2025, 10:20 PM",
        pickupLocation: "Banasree",
        destination: "Bashundhara",
        earnings: "$50.00",
        riderName: "Imran Khan",
    })
    const rides1 = Array(8).fill({
        driverName: "Md. Abid Hasan",
        timestamp: "10-2-2025, 10:20 PM",
        pickupLocation: "Banasree",
        destination: "Bashundhara",
        earnings: "$50.00",
        riderName: "Imran Khan",
    })


    const handleDelete = async (id: string) => {
        const confirmed = await confirm();
        if (confirmed) {
            console.log(id)
        }
    };

    return (
        <div className="overflow-y-hidden">
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
                            placeholder="Search for parents"
                        />
                        <div className="bg-[#5B7A7D] py-3 px-3 rounded-tr-xs rounded-br-xs text-white font-semibold transition-colors cursor-pointer">
                            <Search size={17} />
                        </div>
                    </div>
                </li>
                <li>
                    <Button onClick={() => setIsOpen(!isOpen)} className="bg-[#5B7A7D] rounded-xs h-full py-[10px] hover:bg-[#5B7A7D] cursor-pointer">
                        <Funnel size={18} className="mr-1" />
                        Filter
                    </Button>
                </li>
            </ul>

            <div>
                <Tables headers={headers}>
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
                            <TableCell className="border-style">{item.address}</TableCell>
                            <TableCell className="flex gap-2">
                                <div onClick={() => setIsPreview(!isPreview)} className="bg-[#fff3eb] text-white px-2 py-1 w-fit rounded-md cursor-pointer"><Eye className="text-[#F96D10]" /></div>
                                <div onClick={() => handleDelete(item.email)} className="bg-[#ffe5e5] text-white px-2 py-1 w-fit rounded-md cursor-pointer"><Trash2 size={20} className="text-[#ff0000]" /></div>
                            </TableCell>

                        </TableRow>
                    ))}


                </Tables>
                {/* pagination section */}
                <ul className="flex flex-wrap justify-between items-center my-7">
                    <li className="font-medium mb-2 lg:mb-0">Total: 10,258 parents</li>
                    <li className="font-medium">
                        <Pagination page={1} onPageChange={() => { }} totalPage={10} per_page={2}></Pagination>
                    </li>
                </ul>
                {/* filters */}
                <Modal open={isOpen} setIsOpen={setIsOpen} className="lg:max-w-[540px] p-4">
                    <h1 className="text-base font-medium text-center">Filter by address</h1>
                    <Form className="space-y-4" from={from} onSubmit={hanldeSubmit}>
                        <FromInput
                            className="bg-gray-200 border-none text-center"
                            name="filter"
                            placeholder="Type address here"
                        />
                        <div className="flex justify-center">
                            <Button variant={"main"} className="px-10 py-2 rounded-sm">
                                Filter
                            </Button>
                        </div>
                    </Form>
                </Modal>
                {/* preview */}
                <Modal open={isPreview} setIsOpen={setIsPreview} className="md:max-w-[1200px] p-4">
                    <div className="text-center mx-auto">
                        <div className="relative inline-block mb-2">
                            <img
                                src={PlaceholderImg()}
                                alt="Profile picture"
                                className="size-30 rounded-full"
                            />
                        </div>
                        <h1 className="text-2xl font-semibold text-primary mb-1">Md. Abid Hasan</h1>
                        <p className="text-primary mb-2">example@gmail.com</p>
                        <h1 className="text-xl font-medium">Address</h1>
                        <h1 className="border-1 flex items-center justify-center gap-x-2 rounded-md py-1 px-13">< MapPin size={17} />New york, USA</h1>
                    </div>
                    <div>
                        <ul className="flex justify-between">
                            <li className="font-medium">Previous rides</li>
                            <li onClick={() => {
                                setIsPreview(false)
                                setSeeOpen(true)
                            }} className="border border-[#5B7A7D] text-[#5B7A7D] px-2 rounded-sm cursor-pointer">See all</li>
                        </ul>
                        <div className="mt-5">
                           <Table>
                              <TableBody>
                                 {rides.map((item, index) => (<TransactionsCard key={index} item={item} />
                            ))}
                              </TableBody>
                           </Table>
                        </div>
                    </div>
                </Modal>

                {/* see all */}
                <Modal open={seeOpen} setIsOpen={setSeeOpen} className="md:max-w-[1200px] p-4">
                    <div>
                        <ul className="flex justify-between items-center mb-2">
                            <li onClick={() => {
                                setIsPreview(true)
                                setSeeOpen(false)
                            }} className="font-medium flex items-center gap-1 cursor-pointer"><ArrowLeft size={16} />Back</li>
                            <li className="font-medium text-xl">Previous rides</li>
                            <li className="opacity-0">5</li>
                        </ul>
                        <div className="mt-5 lg:max-w-[1200px]">
                              <Table>
                              <TableBody>
                                 {rides1.map((item, index) => (<TransactionsCard key={index} item={item} />
                            ))}
                              </TableBody>
                           </Table>
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    );
}
