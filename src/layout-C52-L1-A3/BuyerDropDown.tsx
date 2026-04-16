"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const BuyerDropdown = () => {
  const [selected, setSelected] = useState("Select"); // default text

  const handleSelect = (value: string) => {
    setSelected(value); // update button text
  };

  return (
    <div className="flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-lg outline-0 text-violet-900">
            {selected}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white border shadow min-w-[120px]">
          <DropdownMenuItem
            className="outline-0 p-2 border-b cursor-pointer"
            onSelect={() => handleSelect(" Professional Basketball Player")}
          >
            Professional Basketball Player
          </DropdownMenuItem>

          <DropdownMenuItem
            className="outline-0 p-2 border-b cursor-pointer"
            onSelect={() => handleSelect(" School Goer")}
          >
            School Goer
          </DropdownMenuItem>

          <DropdownMenuItem
            className="outline-0 p-2 border-b cursor-pointer"
            onSelect={() => handleSelect(" Party Attendee")}
          >
            Party Attendee
          </DropdownMenuItem>


          <DropdownMenuItem
            className="outline-0 p-2 border-b cursor-pointer"
            onSelect={() => handleSelect("   Daily Walker")}
          >
            Daily Walker
          </DropdownMenuItem>

          
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default BuyerDropdown;
