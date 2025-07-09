import { ArrowDownLeft } from "lucide-react"
import { PlaceholderImg } from "../../../lib/utils"
import { Table, TableBody, TableCell, TableRow } from "../../ui"
import rider from "../../../assets/rider.png"
import money from "../../../assets/money.png"
import location from "../../../assets/location.png"
import destination from "../../../assets/des.png"
import { useTitle } from "../../../hooks/title";
import { useEffect } from "react"

export default function Transactions() {
    const { setTitle, setSubtitle,title, subtitle } = useTitle();
    useEffect(() => {
        setTitle("Transactions");
        setSubtitle("You can see total payments history from here.");
    }, [setTitle, setSubtitle]);

    const rides = Array(11).fill({
        driverName: "Md. Abid Hasan",
        timestamp: "10-2-2025, 10:20 PM",
        pickupLocation: "Banasree",
        destination: "Bashundhara",
        earnings: "$50.00",
        riderName: "Imran Khan",
    })

    return (
        <div className="py-3">
             <ul className="lg:hidden mb-3">
        <li className="text-2xl font-bold text-primary">{title}</li>
        <li className="text-sm text-gray-600">{subtitle}</li>
      </ul>
             <Table>
           <TableBody>
             {rides.map((item, index) => (
                <TableRow className="border-none" key={index}>
                    <TableCell>
                        <div className="flex gap-2 items-center">
                            <div className="size-8 bg-white grid place-items-center">
                                <ArrowDownLeft className="text-[#00B047]" size={18} />
                            </div>
                            <div className="relative mr-4">
                                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                                    <img
                                        src={PlaceholderImg()}
                                        alt="Driver profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Driver Info */}
                            <div>
                                <div className="font-medium text-gray-900 text-sm">{item.driverName}</div>
                                <div className="text-gray-500 text-xs">{item.timestamp}</div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center mr-8">
                            <img src={location} className="mr-2 size-7" />
                            <div>
                                <div className="font-medium text-gray-900 text-sm">Pick Up</div>
                                <div className="text-gray-500 text-xs">{item.pickupLocation}</div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center mr-8">
                            <img src={destination} className="mr-2 size-7" />
                            <div>
                                <div className="font-medium text-gray-900 text-sm">Destination</div>
                                <div className="text-gray-500 text-xs">{item.destination}</div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center mr-8">
                            <img src={money} className="mr-2 size-5" />
                            <div>
                                <div className="font-medium text-gray-900 text-sm">Rider earned</div>
                                <div className="text-gray-500 text-xs">{item.earnings}</div>
                            </div>
                        </div>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center">
                            <img src={rider} className="mr-2 size-5" />
                            <div>
                                <div className="font-medium text-gray-900 text-sm">Rider</div>
                                <div className="text-gray-500 text-xs">{item.riderName}</div>
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
           </TableBody>
        </Table>
        </div>
    )
}
