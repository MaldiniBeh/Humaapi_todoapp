import React from "react";
import "./buttons.css";

export default function Buttons(props) {
  const { setColor } = props;
  const color = [
    { id: "green", color: "green" },
    { id: "red", color: "red" },
    { id: "yellow", color: "yellow" },
    { id: "blue", color: "blue" },
  ];
  return (
    <div className="bg-white  rounded-lg grid grid-cols-4 gap-2 h-8 px-2">
      {color.map((el) => (
        <div
          key={el.id}
          className="rounded-full w-8 cursor-pointer"
          id={el.id}
          style={{ backgroundColor: el.color }}
          onClick={() => setColor(el.color)}
        ></div>
      ))}

      {/* <Inputs inputData={btnData} /> */}
    </div>
  );
}
