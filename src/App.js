import { useState, useEffect } from "react";
import Buttons from "./Hooks/Buttons/buttons";
import Inputs from "./Hooks/Inputs/inputs";
import Actions from "./Hooks/Actions/action";
import { service } from "./services/taskService";
export default function App() {
  const [color, setColor] = useState("");
  const [message, setMessage] = useState(["", false, 0]);
  const [items, setItems] = useState(service.list());

  return (
    <div className="place-items-center bg-gray-100 min-h-screen grid">
      <Buttons setColor={setColor} />
      <Inputs
        items={items}
        color={color}
        message={message}
        setMessage={setMessage}
        setItems={setItems}
      />
      <Actions
        message={message}
        items={items}
        setItems={setItems}
        setMessage={setMessage}
      />
    </div>
  );
}
