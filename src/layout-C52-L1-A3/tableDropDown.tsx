"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type Props = {
  onChange: (value: string) => void;
  status?: "correct" | "wrong" | "neutral";
};

const TableDropdown = ({ onChange, status = "neutral" }: Props) => {
  const [selected, setSelected] = useState("Select");

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  const getColor = () => {
    if (status === "correct") return "text-green-700 font-bold";
    if (status === "wrong") return "text-red-700 font-bold";
    return "text-violet-900";
  };

  return (
    <div className="flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={`text-lg outline-0 ${getColor()}`}>
            {selected}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white border shadow min-w-[120px]">
          <DropdownMenuItem
            className="p-2 cursor-pointer"
            onSelect={() => handleSelect("Low")}
          >
            Low
          </DropdownMenuItem>

          <DropdownMenuItem
            className="p-2 cursor-pointer"
            onSelect={() => handleSelect("High")}
          >
            High
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TableDropdown;
