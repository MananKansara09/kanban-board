import { create } from "zustand";

export interface TaskTypes {
  title: string;
  state: "PLANNED" | "ONGOING" | "DONE";
}

export interface StoreTypes {
  tasks: TaskTypes[];
  addTask: () => void;
}
const store = (set: (partial: Partial<StoreTypes>) => void): StoreTypes => ({
  tasks: [
    { title: "Task", state: "DONE" },
    { title: "One", state: "ONGOING" },
    { title: "Two", state: "DONE" },
    { title: "Three", state: "DONE" },
    { title: "Four", state: "ONGOING" },
    { title: "Five", state: "DONE" },
    { title: "Six", state: "ONGOING" },
    { title: "Seven", state: "PLANNED" },
  ],
  draggedTask: null,
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),

  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map(
        (task) => task,
        title === title ? { title, state } : task,
      ),
    })),
});

export const useStore = create<StoreTypes>(store);
