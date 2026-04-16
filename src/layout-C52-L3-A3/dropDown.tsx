"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function DropdownMenuDemo() {
  const [selectedValue, setSelectedValue] = useState("Select");

  const options = [
    "YES [ONLY DIRECT DEBIT]",
    "YES, IN SOMETIME",
    "YES, IMMEDIATE",
    "YES",
    "NO",
  ];

  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={` w-full
              outline-none
              cursor-pointer
              flex justify-between items-center
              px-5 py-2
              text-black
              font-bold
              
              ${selectedValue === "Select" ? "border rounded border-black/50 " : ""}
              `}
          >
            <span className="truncate">{selectedValue}</span>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="center" className="w-[220px]">
          {options.map((item) => (
            <DropdownMenuItem key={item} onClick={() => setSelectedValue(item)}>
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
