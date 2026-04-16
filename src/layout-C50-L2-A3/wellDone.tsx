import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

type myProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  msg:string
};

const Welldone = ({ open, setOpen ,msg}: myProps) => {

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <div className="min-w-[200px] w-full p-5 bg-white flex justify-center items-center flex-col ">
          {/* <Image
            src="/Well_Done.jpg"
            width={200}
            height={100}
            alt="well done image"
          /> */}
          <h1 className="text-center text-3xl font-bold pb-10 text-black ">
            {msg}
          </h1>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="text-center text-xl cursor-pointer rounded-lg px-10 text-white py-2 bg-black "
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Welldone;
