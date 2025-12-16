import Image from "next/image";


const Slide2Table = () => {
  return (
    <div className="grid grid-cols-12 w-[80%] ">
      <div className="col-span-12 font-bold text-lg  text-black my-3">
        Here are the product details
      </div>
      <div className="text-white col-span-3 w-full bg-violet-900 p-1 font-bold  text-center">
        Product
      </div>
      <div className="text-white col-span-3 w-full bg-violet-900 p-1 font-bold  text-center">
        Product Details
      </div>
      <div className="text-white col-span-3 w-full bg-violet-900 p-1 font-bold  text-center">
        Cost
      </div>
      <div className="text-white col-span-3 w-full bg-violet-900 p-1 font-bold  text-center">
        Buyer (Suggestive Response)
      </div>
      <div className="text-black col-span-3 w-full flex flex-col justify-center items-center gap-1 p-1 border  text-center">
        <h4 className="text-black text-md">Jordan 4 Retro 'Rare Air'</h4>
        <div className="w-20 h-20 relative border">
          <Image src="/C50Images/Jordan.jpeg" fill alt="images" />
        </div>
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        Durable Material, Excellent Grip
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        400 dollars
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        Professional Basketball Player
      </div>

      {/* ================= */}

      <div className="text-black col-span-3 w-full flex flex-col justify-center items-center gap-1 p-1 border  text-center">
        <h4 className="text-black text-md">Liberty Canva Shoes</h4>
        <div className="w-20 h-20 relative border">
          <Image src="/C50Images/Liberty.jpeg" fill alt="images" />
        </div>
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        Recycled Material
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        50 dollars
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        School Goer
      </div>

      {/* ================= */}

      <div className="text-black col-span-3 w-full flex flex-col justify-center items-center gap-1 p-1 border  text-center">
        <h4 className="text-black text-md">Kids Fashion</h4>
        <div className="w-20 h-20 relative border">
          <Image src="/C50Images/Fashion.jpeg" fill alt="images" />
        </div>
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        Stylish Material
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        40 dollars
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        Party Attendee
      </div>

      {/* ================= */}

      <div className="text-black col-span-3 w-full flex flex-col justify-center items-center gap-1 p-1 border  text-center">
        <h4 className="text-black text-md">ASICS</h4>
        <div className="w-20 h-20 relative border">
          <Image src="/C50Images/Asics.jpg" fill alt="images" />
        </div>
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        Durable Material, Comfortable with Good Grip
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        100 dollars
      </div>

      <div className="text-black col-span-3 w-full flex  justify-center items-center gap-1 p-1 border  text-center">
        Daily Walker
      </div>
    </div>
  );
};

export default Slide2Table;
