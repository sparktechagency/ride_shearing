import { useEffect, useState } from "react";
import { useTitle } from "../../../hooks/title";
import { Button } from "../../ui";
import { PlaceholderImg } from "../../../lib/utils";
import { useForm, type FieldValues } from "react-hook-form";
import Form from "../../reuseable/from";
import { FromInput } from "../../reuseable/from-input";
import { SquarePen } from "lucide-react";
import ChangePassword from "../../common/change-password";

export default function Profile() {
    const { setTitle, setSubtitle, title, subtitle } = useTitle();
    const [isTab, setIsTab] = useState("edit");

    const from = useForm({
        defaultValues: {
            name: "",
            email: "",
        },
    });

    const handleSubmit = async (values: FieldValues) => {
        console.log("Profile form:", values);
    };



    useEffect(() => {
        setTitle("My profile");
        setSubtitle("You can manage your admin profile from here");
    }, [setTitle, setSubtitle]);

    return (
        <div>
            <ul className="lg:hidden mb-3">
                <li className="text-2xl font-bold text-primary">{title}</li>
                <li className="text-sm text-gray-600">{subtitle}</li>
            </ul>

            <div className="max-w-6xl mx-auto">
                {/* Profile Header */}
                <div className="bg-white rounded-md py-4 text-center mx-auto">
                    <div className="relative inline-block mb-2">
                        <img
                            src={PlaceholderImg()}
                            alt="Profile picture"
                            className="size-30 rounded-full"
                        />
                        {isTab == "edit" && (
                            <div className="bg-white shadow-md w-fit p-1 rounded-full absolute bottom-2 right-2 cursor-pointer">
                                <SquarePen size={16} className="text-[#B1A8A8]" />
                            </div>
                        )}

                    </div>
                    <h1 className="text-2xl font-semibold text-primary mb-1">John Doe</h1>
                    <p className="text-[#B1A8A8] mb-4">example@gmail.com</p>
                </div>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-4 text-sm py-3">
                    <button
                        onClick={() => setIsTab("edit")}
                        className={`text-[#043249] ${isTab === "edit" && "!border-b-2 !border-[#043249]/90"} border-b-2 border-transparent font-semibold text-base cursor-pointer`}
                    >
                        Edit Profile
                    </button>
                    <button
                        onClick={() => setIsTab("change")}
                        className={`text-[#043249] ${isTab === "change" && "!border-b-2 !border-[#043249]/90"} border-b-2 border-transparent font-semibold text-base cursor-pointer`}
                    >
                        Change Password
                    </button>
                </div>

                {/* Forms */}
                {isTab === "edit" ? (
                    <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
                        <FromInput
                            className="bg-white border-none"
                            label="Name"
                            name="name"
                            placeholder="Enter your name"
                        />
                        <FromInput
                            className="bg-white border-none"
                            label="Email"
                            name="email"
                            placeholder="Enter your email"
                        />
                        <div className="flex justify-center">
                            <Button variant={"main"} className="px-8">
                                Save
                            </Button>
                        </div>
                    </Form>
                ) : (
                    <ChangePassword />
                )}
            </div>
        </div>
    );
}
