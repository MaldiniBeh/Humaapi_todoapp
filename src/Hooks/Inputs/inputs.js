import React from "react";
import "./inputs.css";
import taskService from "../../services/taskService";
export default function Inputs(props) {
  const { item, color, message, setMessage, setItem, setTask } = props;
  const Task = new taskService();
  return (
    <div
      className="bg-white rounded-lg grid grid-cols-4 gap-2 h-10 px-2 pt-1"
      style={{ backgroundColor: color }}
    >
      <div className="col-span-3">
        <input
          type="text"
          className="text-sm rounded-lg  block w-28 p-1.5 bg-gray-300  dark:text-black "
          name="msg"
          value={message[0]}
          onChange={ongetChangeinput}
        />
      </div>
      <div
        className="rounded-full bg-blue-500 w-8 cursor-pointer"
        onClick={onaddItem}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={`${
              message[1]
                ? " M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                : "M12 6v6m0 0v6m0-6h6m-6 0H6"
            }`}
          ></path>
        </svg>
      </div>
    </div>
  );
  function ongetChangeinput(event) {
    if (message[1]) {
      setMessage([event.target.value, true, message[2]]);
    } else {
      setMessage([event.target.value, false]);
    }
  }

  function onaddItem() {
    let tasked;
    if (message[1]) {
      const newTask = item[message[2]];
      newTask.content = message[0];
      setItem([...item]);
      setMessage(["", false, 0]);
    } else {
      tasked = {
        id: item.length,
        isHide: false,
        isCheck: false,
        content: message[0],
      };
      setMessage(["", false]);
      setItem((prevItem) => [...prevItem, tasked]);
      setTask((prevTask) => [...prevTask, tasked]);
    }
  }
}
