import { TableCell, TableRow } from '../../ui'
import { PlaceholderImg } from '../../../lib/utils'
import money from "../../../assets/money.png"
import location from "../../../assets/location.png"
import destination from "../../../assets/des.png"
import rider from "../../../assets/rider.png"

export default function TransactionsCard({item}:any) {
    return (
        <TableRow className="border-none">
            <TableCell>
                <div className="flex gap-2 items-center">
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
    )
}
