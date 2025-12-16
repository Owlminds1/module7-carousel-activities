
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";


type myProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  text: string;
};

const Welldone = ({ open, setOpen,text }: myProps) => {

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <div className="min-w-[200px] w-full p-5 bg-white flex justify-center items-center flex-col ">
          
          <h1 className="text-center text-2xl font-bold pb-10 text-black ">
         {text}
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
