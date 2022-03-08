import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const Edit = ({ handleUpdate }) => {
  
  const { taskid } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:8000/tasks/${taskid}`);
      const data = await res.json();

      setTitle(data.title);
      setDate(data.date);
      setReminder(data.reminder);
    };

    fetchTask();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!title){
      alert('Please add some task.');
      return;
    }

    handleUpdate({id: taskid, title, date, reminder});
    navigate('/');
  };

  return (
    <>
      <Link to='/'>Go Back</Link>
      <h3 style={{marginTop: "10px"}}>Edit task</h3>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Day and Time</label>
          <input
            type="text"
            placeholder="Add day"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            onChange={(e) => setReminder(e.currentTarget.checked)}
            checked={reminder}
          />
        </div>

        <input type="submit" value="Edit Task" className="btn btn-block" />
      </form>
    </>
  );
};

export default Edit;
