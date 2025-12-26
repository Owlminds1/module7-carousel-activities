"use client";

import { useState } from "react";
import jsPDF from "jspdf";

const PdfSlide = () => {
  const [data, setData] = useState({
    parentName: "",
    actions: ["", "", "", "", ""],
    impacts: ["", "", "", "", ""],
    yourName: "",
  });

  const updateAction = (i: number, value: string) => {
    const copy = [...data.actions];
    copy[i] = value;
    setData({ ...data, actions: copy });
  };

  const updateImpact = (i: number, value: string) => {
    const copy = [...data.impacts];
    copy[i] = value;
    setData({ ...data, impacts: copy });
  };

  // 📄 PDF GENERATOR
  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let y = 20;

    // 🔹 TITLE
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("THANK YOU NOTE", pageWidth / 2, y, {
      align: "center",
    });

    y += 15;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const content = `
Dear Parents ${data.parentName},

I’m so grateful and feel privileged that you’re my parents.

Growing up, I have always felt happy to call you my parents.
You ${data.actions[0]} which helps me to ${data.impacts[0]}.
Not only do you ${data.actions[1]} but you also ${data.actions[2]},
ensuring that I am able to ${data.impacts[1]}.

When I see kids around me, I feel that I have the best parents in the world.
It’s because you ${data.actions[3]} allowing me to ${data.impacts[2]}.

I wouldn’t trade my parents for any other!
It’s because you ${data.actions[4]} making sure that I’m ${data.impacts[3]}.

I love you always.
I hope I can become as awesome as you are.
Thank you for being my parents.

Your Name:
${data.yourName}
`;

    // 🔹 Auto wrap + auto page break
    const lines = doc.splitTextToSize(content, pageWidth - 30);

    lines.forEach((line: string) => {
      if (y > pageHeight - 20) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, 15, y);
      y += 8;
    });

    doc.save("Thank_You_Note.pdf");
  };

  return (
    <div className="min-h-screen flex justify-center items-start p-10 bg-[#F8FCFA]">
      <div className="w-[80%] flex flex-col gap-5 text-black text-lg leading-relaxed">
        <p>
          <strong>Dear Parents</strong>{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="Enter Name"
            value={data.parentName}
            onChange={(e) =>
              setData({ ...data, parentName: e.target.value })
            }
          />
          ,
        </p>

        <p>I’m so grateful and feel privileged that you’re my parents.</p>

        <p>
          Growing up, I have always felt happy to call you my parents. You{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="action"
            onChange={(e) => updateAction(0, e.target.value)}
          />{" "}
          which helps me to{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="impact"
            onChange={(e) => updateImpact(0, e.target.value)}
          />
          . Not only do you{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="action"
            onChange={(e) => updateAction(1, e.target.value)}
          />{" "}
          but you also{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="action"
            onChange={(e) => updateAction(2, e.target.value)}
          />
          , ensuring that I am able to{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="impact"
            onChange={(e) => updateImpact(1, e.target.value)}
          />
          .
        </p>

        <p>
          When I see kids around me, I feel that I have the best parents in the
          world. It’s because you{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="action"
            onChange={(e) => updateAction(3, e.target.value)}
          />{" "}
          allowing me to{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="impact"
            onChange={(e) => updateImpact(2, e.target.value)}
          />
          .
        </p>

        <p>
          I wouldn’t trade my parents for any other! It’s because you{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="action"
            onChange={(e) => updateAction(4, e.target.value)}
          />{" "}
          making sure that I’m{" "}
          <input
            className="border-b border-gray-500 mx-1 px-2 focus:outline-none"
            placeholder="impact"
            onChange={(e) => updateImpact(3, e.target.value)}
          />
          .
        </p>

        <p>I love you always.</p>
        <p>I hope I can become as awesome as you are.</p>
        <p>Thank you for being my parents.</p>

        <p className="mt-6">
          <strong>Your Name</strong>
          <br />
          <input
            className="border-b border-gray-500 mt-2 w-1/2 px-2 focus:outline-none"
            placeholder="Write your name"
            value={data.yourName}
            onChange={(e) =>
              setData({ ...data, yourName: e.target.value })
            }
          />
        </p>

       <div className="w-full text-center">
         <button
          onClick={generatePDF}
          className="mt-8 bg-violet-900 text-lg cursor-pointer text-white px-5 py-2 rounded-lg self-start"
        >
          Download as (PDF)
        </button>
       </div>
      </div>
    </div>
  );
};

export default PdfSlide;
