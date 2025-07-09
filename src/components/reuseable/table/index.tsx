import React from "react";
import { cn } from "../../../lib/utils";
import {
    Table as TableArea,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui";


interface tableProps {
    className?: string;
    headers: string[];
    children: React.ReactNode;
}

export const Table = ({
    className,
    headers = [],
    children
}: tableProps) => {
    return (
        <div className={cn("mt-4", className)}>
            <div>
                <TableArea>
                    {headers && headers.length > 0 && (
                        <TableHeader>
                            <TableRow className="border-none pb-10 mx-auto">
                                {headers?.map((header, index) => (
                                    <TableHead
                                        className="first:border-none border-l h-0 border-[#b3b3b3]"
                                        key={index}
                                    >
                                        <h1 className="w-max capitalize ml-20 text-primary font-semibold">{header}</h1>
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                    )}
                    <TableBody>{children}</TableBody>
                </TableArea>
            </div>
        </div>
    );
};
