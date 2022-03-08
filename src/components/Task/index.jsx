import { FaTimes } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Task = ({ task, onDelete, onDblClick }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onDblClick(task.id)}
    >
      <h3>
        {task.title}{" "}
        <Link
          to={`/edit/${task.id}`}
          style={{
            display: "inline",
            marginLeft: "auto",
            marginRight: "20px",
            marginBottom: "-6px",
            color: "blue",
          }}
        >
          <AiFillEdit />
        </Link>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  );
};
export default Task;
