import { useEffect } from "react";
import { useTitle } from "../../../hooks/title";
import { User, CreditCard, TrendingUp } from "lucide-react"

export default function Notifications() {
    const { setTitle, setSubtitle, title, subtitle } = useTitle();
    useEffect(() => {
        setTitle("Notifications");
        setSubtitle("You can see all of your notifications from here.");
    }, [setTitle, setSubtitle]);

    const activities = [
        {
            id: 1,
            icon: User,
            title: "User Registration",
            description: "50 new user registered into your application.",
            date: "05-02-2025",
            time: "10:20 PM",
        },
        {
            id: 2,
            icon: CreditCard,
            title: "Payment",
            description: "36 Riders took their payments.",
            date: "05-02-2025",
            time: "10:20 PM",
        },
        {
            id: 3,
            icon: TrendingUp,
            title: "Need Review",
            description: "20 new riders need to review their account.",
            date: "05-02-2025",
            time: "10:20 PM",
        },
        {
            id: 4,
            icon: User,
            title: "User Registration",
            description: "50 new user registered into your application.",
            date: "05-02-2025",
            time: "10:20 PM",
        },
        {
            id: 5,
            icon: CreditCard,
            title: "Payment",
            description: "36 Riders took their payments.",
            date: "05-02-2025",
            time: "10:20 PM",
        },
        {
            id: 6,
            icon: TrendingUp,
            title: "Need Review",
            description: "20 new riders need to review their account.",
            date: "05-02-2025",
            time: "10:20 PM",
        },
    ]


    return (
        <div>
            <ul className="lg:hidden mb-3">
                <li className="text-2xl font-bold text-primary">{title}</li>
                <li className="text-sm text-gray-600">{subtitle}</li>
            </ul>
            <div className="space-y-6">
                {activities.map((activity) => {
                    const IconComponent = activity.icon
                    return (
                        <div key={activity.id} className="flex gap-4 bg-white py-3 px-2 items-center rounded-md">
                            <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-[#5B7A7D]" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base font-medium mb-1 text-[#5B7A7D]">{activity.title}</h3>
                                <p className="text-sm text-slate-500">{activity.description}</p>
                            </div>
                            <div className="flex-shrink-0 text-right">
                                <div className="text-sm font-medium text-primary">{activity.date}</div>
                                <div className="text-sm text-slate-500">{activity.time}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
