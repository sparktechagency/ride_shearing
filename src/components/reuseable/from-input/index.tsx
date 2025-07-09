import { useState } from "react";
import { CircleAlert, Eye, EyeOff } from "lucide-react";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type ControllerRenderProps,
  type ControllerFieldState,
} from "react-hook-form";
import { Input, Label } from "../../ui";
import { cn } from "../../../lib/utils";



interface formInputProps {
 stylelabel?:string;
  name: string;
  type?: string;
  label?: string;
  eye?: boolean;
  placeholder?: string;
  className?: string;
}

export function FromInput({
  name,
  type = "text",
  eye = false,
  label,
  placeholder,
  stylelabel,
  className,
}: formInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const { control } = useFormContext();

  const inputType = eye ? (isPasswordVisible ? "text" : "password") : type;


  return (
    <Controller
      control={control}
      name={name}
      render={({
        field,
        fieldState: { error },
      }: {
        field: ControllerRenderProps<FieldValues>;
        fieldState: ControllerFieldState;
      }) => (
        <div>
          {label && <Label className={cn("mb-2 text-primary text-base",stylelabel)}>{label}</Label>}
          <div className="relative">
            <Input
              className={className}
              {...field}
              type={inputType}
              placeholder={placeholder}
            />
            {eye && (
              <h1
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute cursor-pointer  top-[6px] right-2"
              >
                {isPasswordVisible ? (
                  <EyeOff className="text-muted-foreground" size={20} />
                ) : (
                  <Eye className="text-muted-foreground" size={20} />
                )}
              </h1>
            )}
          </div>
          {error?.message && (
            <h3 className="text-sm pt-[1px] text-end text-[#f73f4e] flex gap-1 items-center justify-end">
              {error.message}
              <CircleAlert size={14} />
            </h3>
          )}
        </div>
      )}
    />
  );
}