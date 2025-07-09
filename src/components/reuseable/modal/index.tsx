import type React from "react";
import { cn } from "../../../lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../../ui";
import { DialogDescription } from "@radix-ui/react-dialog";


interface ModalProps {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  open,
  setIsOpen,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
        <DialogTrigger asChild />
        <DialogContent className={cn("sm:max-w-[425px]", className)}>
            <DialogTitle className="hidden"></DialogTitle>
             <DialogDescription className="hidden"></DialogDescription>
          {children}
        </DialogContent>
    </Dialog>
  );
}
