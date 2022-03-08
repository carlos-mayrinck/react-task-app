import Task from "../Task";

const Tasks = ({ tasks, onDelete, handleUpdate }) => {
    return (
      <>
        {tasks.map( task => (
          <Task task={task} key={ task.id } onDelete={onDelete} onDblClick={handleUpdate} />
        ) )}
      </>
    );
}

export default Tasks;