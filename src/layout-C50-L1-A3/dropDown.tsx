"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type Props = {
  items: { text: string; val: string }[];
  onSelect: (item: { text: string; val: string }) => void;
};

export function DropdownMenuDemo({ items, onSelect }: Props) {
  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            
            className="
          
              w-full max-w-[150px]
              cursor-pointer
              flex justify-center items-center
              border border-gray-400
              text-black
            "
          >
            <span>Select</span>
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          className="w-[180px]"
        >
          {items.map((item, index) => (
            <DropdownMenuItem
            className="cursor-pointer"
              key={index}
              onClick={() => onSelect(item)}
            >
              {item.text}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
