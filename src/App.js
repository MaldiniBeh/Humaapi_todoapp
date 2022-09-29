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
  const [items, setItems] = useState(JSON.parse(getStorage) || []);
  const [tasks, setTasks] = useState(items);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    return () => {};
  }, [items]);
  return (
    <div className="place-items-center bg-gray-100 min-h-screen grid">
      <Buttons setColor={setColor} />
      <Inputs
        items={items}
        color={color}
        message={message}
        setMessage={setMessage}
        setItems={setItems}
        setTasks={setTasks}
      />
      <Actions
        message={message}
        items={items}
        setItems={setItems}
        tasks={tasks}
        setMessage={setMessage}
        setTasks={setTasks}
      />
    </div>
  );
}
