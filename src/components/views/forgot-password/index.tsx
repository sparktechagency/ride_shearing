import { Button, Card, CardContent, CardHeader} from "../../ui";
import { useForm, type FieldValues } from "react-hook-form";
import Form from "../../reuseable/from";
import { FromInput } from "../../reuseable/from-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "../../../schema";



export default function ForgotPassword() {
  const from = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: ""
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log("Login form:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full bg-[#636363]/0.5 max-w-lg py-20">
        <CardHeader className="space-y-2 text-center pb-4">
          <h1 className="text-2xl font-semibold text-primary">Forgot password ?</h1>
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
             <div className="flex justify-center">
               <Button variant={"main"} className="rounded-sm"> Send Code</Button>
             </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
