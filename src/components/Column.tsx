import React, { useState } from "react";
import "./coloumn.css";
import Task from "./task";
import { useStore } from "../../store/index.ts";
import { shallow } from "zustand/shallow";

interface ColoumnProps {
  state: string;
}
const Coloumn: React.FC<ColoumnProps> = ({ state }) => {
  const tasks = useStore((state) => state.tasks, shallow);
  const filtteredTask = tasks.filter((data) => data.state === state);
  const addTask = useStore((state) => state.addTask, shallow);

  const [modelText, setModelText] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div
      className="cloumn"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        console.log(e);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add
        </button>
      </div>
      {filtteredTask.map((task, index) => (
        <Task title={task.title} status={task.state} key={index} />
      ))}

      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input
              onChange={(e) => setModelText(e.target.value)}
              value={modelText}
            />
            <button
              onClick={() => {
                addTask(modelText, state);
                setModelText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coloumn;
