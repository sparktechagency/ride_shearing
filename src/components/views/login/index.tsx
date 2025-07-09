import { Button, Card, CardContent, CardHeader, Checkbox, Label } from "../../ui";
import { useForm, type FieldValues } from "react-hook-form";
import Form from "../../reuseable/from";
import { FromInput } from "../../reuseable/from-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "../../../schema";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const from = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log("Login form:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full bg-[#636363]/0.5 max-w-lg py-20">
        <CardHeader className="space-y-2 text-center pb-4">
          <h1 className="text-2xl font-semibold text-primary">Log in to your account</h1>
          <p className="text-sm text-gray-600">Please enter your email and password to continue</p>
        </CardHeader>
        <CardContent>
          <Form className="space-y-4" from={from} onSubmit={handleSubmit}>
            <FromInput
              className="bg-[#636363]/0.5 border"
              label="Email"
              stylelabel="text-[#636363]"
              name="email"
              placeholder="Enter your Email"
            />
            <FromInput
              className="bg-[#636363]/0.5 border"
              eye={true}
              stylelabel="text-[#636363]"
              label="Password"
              name="password"
              placeholder="Enter your Password"
              type="password"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox className="border-[#00B047]" id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                  Remember Password
                </Label>
              </div>
              <Link to="/auth/forgot-password">
                <h1 className="text-[#5B7A7D] font-medium text-xs">Forgot Password?</h1>
              </Link>


            </div>

            <div className="flex justify-center">
              <Button variant={"main"} className="rounded-sm"> Sign in</Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
