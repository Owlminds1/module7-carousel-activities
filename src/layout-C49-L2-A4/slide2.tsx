import Image from "next/image";

const Slide2 = () => {
  return (
    <div className=" flex min-h-[110vh] justify-center  relative items-center ">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-[38%] h-[28%] w-0.5 bg-black -translate-x-1/2" />

      {/* Diagonal lines */}
      <div className="hidden lg:block absolute w-0.5 h-[25%] bg-black -rotate-70 left-[36%] top-[30%]" />

      <div className="hidden lg:block absolute w-0.5 h-[25%] bg-black rotate-70 right-[36%] top-[30%]" />

      <div className="hidden lg:block absolute w-0.5 h-[25%] bg-black rotate-70 left-[36%] bottom-[30%]" />

      <div className="hidden lg:block absolute w-0.5 h-[25%]   bg-black -rotate-70 right-[36%] bottom-[30%]" />

      <div className="box top-[5%] left-[2%] min-h-65 absolute  flex justify-start items-center flex-col gap-2 w-100 p-2 rounded-lg shadow border ">
        <div className="w-25 h-25 relative border">
          <Image src="/C49Images/Inclusion.jpg" fill alt="images" />
        </div>
        <h4 className="text-black text-md font-bold text-center">INCLUSION </h4>

        <h4 className="text-black text-md font-bold text-center">
          (example: I can be inclusive by speaking to someone who looks
          different from me)
        </h4>
        <h4 className="text-black w-full text-center  ">
          I can be inclusive by (list an action)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />{" "}
        </h4>
      </div>

      <div className="box top-[0%] left-[36%] min-h-65 absolute  flex justify-start items-center flex-col gap-2 w-100 p-2 rounded-lg shadow border ">
        <div className="w-25 h-25 relative border">
          <Image src="/C49Images/HW.jpg" fill alt="images" />
        </div>
        <h4 className="text-black text-md font-bold text-center">
          CARING for others{" "}
        </h4>
        <h4 className="text-black text-md font-bold text-center">
          (example: I can be caring by helping a peer with studies)
        </h4>
        <h4 className="text-black w-full text-center  ">
          I can be caring towards (list groups of people, communities, or
          creatures){" "}
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />{" "}
          by (list an action){" "}
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />
        </h4>
      </div>

      <div className="box top-[5%] right-[2%] min-h-65 absolute  flex justify-start items-center flex-col gap-2 w-100 p-2 rounded-lg shadow border ">
        <div className="w-25 h-25 relative border">
          <Image src="/C49Images/Integrity.jpg" fill alt="images" />
        </div>

        <h4 className="text-black text-md font-bold text-center">INTEGRITY </h4>

        <h4 className="text-black text-md font-bold text-center">
          (example: I can practice integrity by being honest)
        </h4>
        <h4 className="text-black w-full text-center  ">
          I can practice integrity by being (list quality)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />{" "}
          or by doing (list action)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />
        </h4>
      </div>

      <div className="box bottom-[5%] right-[2%] min-h-65 absolute  flex justify-start items-center flex-col gap-2 w-100 p-2 rounded-lg shadow border ">
        <div className="w-25 h-25 relative border">
          <Image src="/C49Images/Courage.jpg" fill alt="images" />
        </div>
        <h4 className="text-black text-md font-bold text-center">COURAGE </h4>

        <h4 className="text-black text-md font-bold text-center">
          (example: I can show courage by speaking up in class)
        </h4>
        <h4 className="text-black w-full text-center  ">
          I can show courage by being (list quality)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />{" "}
          or by doing (list action)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />
        </h4>
      </div>

      <div className="box bottom-[0%] right-[36%] min-h-65 absolute  flex justify-start items-center flex-col gap-2 w-100 p-2 rounded-lg shadow border ">
        <div className="w-25 h-25 relative border">
          <Image src="/C49Images/Behaving_Responsibly.jpg" fill alt="images" />
        </div>
        <h4 className="text-black text-md font-bold text-center">
          RESPONSIBILITY{" "}
        </h4>

        <h4 className="text-black text-md font-bold text-center">
          (example: I can behave responsibly by recycling)
        </h4>
        <h4 className="text-black w-full text-center  ">
          I can behave responsibly by being (list quality)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />{" "}
          or by doing (list action)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />
        </h4>
      </div>

      <div className="box bottom-[5%] left-[2%] min-h-65 absolute  flex justify-start items-center flex-col gap-2 w-100 p-2 rounded-lg shadow border ">
        <div className="w-25 h-25 relative border">
          <Image src="/C49Images/Respect.png" fill alt="images" />
        </div>
        <h4 className="text-black text-md font-bold text-center">RESPECT </h4>

        <h4 className="text-black text-md font-bold text-center">
          (example: I can show respect by addressing elders using kind language)
        </h4>
        <h4 className="text-black w-full text-center  ">
          I can show respect by being (list quality)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />{" "}
          or by doing (list action)
          <input
            type="text"
            placeholder="wtite here..."
            className="w-25 px-1 border-b border-black outline-0"
          />
        </h4>
      </div>
      <div className="relative z-20 bg-white border border-black px-6 py-3 font-bold text-xl text-black">
        KINDNESS
      </div>
    </div>
  );
};

export default Slide2;
