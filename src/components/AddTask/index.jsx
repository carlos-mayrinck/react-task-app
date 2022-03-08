import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!title){
      alert('Please add some task.');
      return;
    }

    onAdd({title, date, reminder});
    setTitle('');
    setDate('');
    setReminder(false);
  }
  return (
    <form className="add-form" onSubmit={ onSubmit }>
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
          onChange={e => setDate(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          onChange={e => setReminder(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
