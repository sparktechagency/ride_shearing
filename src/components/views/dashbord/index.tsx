import { Calendar, Car, Users } from "lucide-react"
import { Card, CardContent } from "../../ui"
import { ChartBarMultiple } from "../../common/charts/ber"
import { ChartPie } from "../../common/charts/pie"
import { useEffect } from "react";
import { useTitle } from "../../../hooks/title";




export default function Dashboard() {
  const { setTitle, setSubtitle,title, subtitle } = useTitle();

  useEffect(() => {
    setTitle("Dashboard Overview");
    setSubtitle("You can see all of your apps statistics from here");
  }, [setTitle, setSubtitle]);
  const metrics = [
    {
      icon: Calendar,
      label: "Total Earnings",
      value: "$500.26",
    },
    {
      icon: Users,
      label: "Total Parents",
      value: "10,256",
    },
    {
      icon: Car,
      label: "Total Drivers",
      value: "3,256"
    },
  ]

  return (
    <div className="lg:space-y-6">
      <ul className="lg:hidden mb-3">
        <li className="text-2xl font-bold text-primary">{title}</li>
        <li className="text-sm text-gray-600">{subtitle}</li>
      </ul>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon
          return (
            <Card key={index} className="flex-1 border-0 shadow-none m-0">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D9E8EA] mb-4`}>
                  <IconComponent className={`w-6 h-6 text-primary`} />
                </div>
                <p className="text-sm text-gray-500 mb-2">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h1 className="text-primary font-medium mb-3">Riding statistics</h1>
          <ChartBarMultiple />
        </div>
        <div>
          <h1 className="text-primary font-medium mb-3">Earning statistics</h1>
          <ChartPie />
        </div>
      </div>
    </div>
  )
}
