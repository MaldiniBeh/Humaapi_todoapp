import { useState, useEffect } from "react";
import Buttons from "./Hooks/Buttons/buttons";
import Inputs from "./Hooks/Inputs/inputs";
import Actions from "./Hooks/Actions/action";
import taskService from "./services/taskService";
export default function App() {
  let getStorage = localStorage.getItem("items");
  const Task = new taskService();
  const [color, setColor] = useState("");
  const [message, setMessage] = useState(["", false, 0]);
  const [item, setItem] = useState(JSON.parse(getStorage) || []);
  const [task, setTask] = useState(Task.tasks);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(item));
    return () => {};
  }, [item]);
  return (
    <div className="place-items-center bg-gray-100 min-h-screen grid">
      <Buttons setColor={setColor} />
      <Inputs
        item={item}
        color={color}
        message={message}
        setMessage={setMessage}
        setItem={setItem}
        setTask={setTask}
      />
      <Actions
        message={message}
        item={item}
        setItem={setItem}
        task={task}
        setMessage={setMessage}
        setTask={setTask}
      />
    </div>
  );
}
