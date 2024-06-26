import "./task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../store";
import classNames from "classnames";
interface TaskProps {
  title: string;
  status: string;
}

const Task: React.FC<TaskProps> = ({ title, status }) => {
  const deleteTask = useStore((state) => state.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  return (
    <div className="task" draggable
      <div className="task-details">{title}</div>
      <div className="bottomWrapper">
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => deleteTask(title)}
          fontSize={28}
        />
        <div className={classNames("status", status)}>{status}</div>
      </div>
    </div >
  );
};
export default Task;
