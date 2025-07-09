import React, { createContext, useContext, useState} from "react";
import {
   AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "../../ui";



interface ConfirmDialogOptions {
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

interface ConfirmDialogContextType {
    confirm: (options?: ConfirmDialogOptions) => Promise<boolean>;
}

const ConfirmDialogContext = createContext<ConfirmDialogContextType | undefined>(undefined);

export const ConfirmDialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [dialogState, setDialogState] = useState<
        ConfirmDialogOptions & { open: boolean; resolve?: (value: boolean) => void }
    >({
        open: false,
        title: "Are you sure to delete this driver ?",
        description: "Are you sure to delete this driver ?",
        confirmText: "Delete",
        cancelText: "Cancel",
    });

    const confirm = (options: ConfirmDialogOptions = {}): Promise<boolean> => {
        return new Promise((resolve) => {
            setDialogState((prev) => ({
                ...prev,
                ...options,
                open: true,
                resolve,
            }));
        });
    };

    const handleConfirm = () => {
        if (dialogState.resolve) dialogState.resolve(true);
        closeDialog();
        dialogState.onConfirm?.();
    };

    const handleCancel = () => {
        if (dialogState.resolve) dialogState.resolve(false);
        closeDialog();
        dialogState.onCancel?.();
    };

    const closeDialog = () => {
        setDialogState((prev) => ({ ...prev, open: false }));
    };

    return (
        <ConfirmDialogContext.Provider value={{ confirm }}>
      {children}
      <AlertDialog  open={dialogState.open} onOpenChange={closeDialog}>
        <AlertDialogContent className="rounded-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogState.title || "Confirm Action"}</AlertDialogTitle>
            <AlertDialogDescription className="hidden">
              {dialogState.description || "Are you sure?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel} className="cursor-pointer rounded-sm">
              {dialogState.cancelText || "Cancel"}
            </AlertDialogCancel>
            <AlertDialogAction className="bg-[red] hover:bg-[red] cursor-pointer rounded-sm" onClick={handleConfirm}>
              {dialogState.confirmText || "Confirm"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ConfirmDialogContext.Provider>
    );
};



// use case
export default function useConfirmation(): ConfirmDialogContextType {
    const context = useContext(ConfirmDialogContext);
    if (!context) {
        throw new Error("useConfirmation must be used within a ConfirmDialogProvider");
    }
    return context;
}

