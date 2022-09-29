import React from "react";
import "./actions.css";

export default function Actions(props) {
  const { message, item, setItem, task, setMessage, setTask } = props;
  return (
    <div className="place-items-center  grid">
      <div className="h-48 w-48 bg-gray-300 rounded-lg mb-5 ">
        {item.map(
          (el, i) =>
            item.length && (
              <div
                className={`${
                  el.ishide ? "hidden" : "block"
                } flex justify-around p-2`}
                key={i}
              >
                <input
                  id={`ischeked${i}`}
                  type="checkbox"
                  onChange={ongetCheck}
                  name={`cheked ${el.id}`}
                  checked={el.isCheck}
                  value={el.id}
                  className="text-blue-600 bg-gray-100 rounded
                     border-gray-300 focus:ring-blue-500
                      dark:focus:ring-blue-600
                       dark:ring-offset-gray-800 focus:ring-2
                        dark:bg-gray-700 dark:border-gray-600"
                />
                <div
                  className={`${
                    el.isCheck ? "bg-gray-100" : "bg-gray-500"
                  } col-span-2  h-8 w-36 rounded-lg`}
                  onClick={() => setMessage([el.content, true, el.id])}
                >
                  <span className="p-2">{el.content}</span>
                </div>
              </div>
            )
        )}
      </div>
      <div className="grid grid-cols-5">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full dark:focus:ring-gray-700 dark:border-gray-700 flex justify-between"
        >
          <span>{`${item.length > 0 ? `${item.length}` : ""}`}</span>

          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 
            mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:focus:ring-blue-800"
          onClick={filterHide}
        >
          <svg
            className="w-8 h-6 mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2
             dark:bg-blue-600 dark:hover:bg-blue-700
              dark:focus:ring-blue-800"
          onClick={filterShow}
        >
          <svg
            className="w-8 h-6 mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={(el) => setItem([...task])}
        >
          All
        </button>
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={onDelete}
        >
          <svg
            className="w-8 h-6 mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </button>
        <button onClick={handleClick}>Test</button>
      </div>
    </div>
  );
  function handleClick(event) {
    setItem([item[0], ...item]);
    setTask([task[0], ...task]);
  }

  function ongetCheck(event) {
    const itemId = +event.target.value;
    const findItem = item.find((el) => el.id === itemId);
    findItem.isCheck = event.target.checked;
    // item.splice(itemId, 1, findItem);
    setItem([...task]);
    setMessage([message[0], message[1], itemId]);
  }

  function onDelete() {
    // let deleted = [];
    const deleted = item.filter((el) => !el.isCheck);
    setItem([...deleted]);
    setTask([...deleted]);
    setMessage([message[0]]);
  }
  function filterShow() {
    const show = task.filter((el) => !el.isCheck);
    if (show.length > 0) {
      setItem([...show]);
    }
  }
  function filterHide() {
    const hide = task.filter((el) => el.isCheck);
    if (hide.length > 0) {
      setItem([...hide]);
    }
  }
}
