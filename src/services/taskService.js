export default class Taskservice {
  tasks = [];
  constructor() {}

  list = () => {
    const data = localStorage.getItem("items");
    if (data) {
      this.tasks = [...JSON.parse(data)];
    }
    return this.tasks;
  };
  filterShow = () => this.tasks.filter((el) => !el.isCheck);

  filterHide = () => this.tasks.filter((el) => el.isCheck);

  createTask = (task) => {
    task.id = new Date().getMilliseconds();
    this.tasks = [...this.tasks, task];
    localStorage.setItem("items", JSON.stringify(this.tasks));
    return task;
  };

  readTask = (id) => {
    const task = this.tasks.find((el) => el.id === id);
    return task;
  };

  updateTask = ({ index, msg, task }) => {
    const newList = this.tasks.find((el) => el.id === index);
    if (task) {
      this.tasks.splice(this.tasks.indexOf(newList), 1, task);
    } else {
      newList.content = msg;
      this.tasks.splice(this.tasks.indexOf(newList), 1, newList);
    }
    localStorage.setItem("items", JSON.stringify(this.tasks));
    return this.tasks;
  };

  deleteTask = () => {
    // const newTasks = this.tasks.filter((el) => !index.includes(el.id));
    const newTasks = this.filterShow();
    localStorage.setItem("items", JSON.stringify(newTasks));
    return newTasks;
  };
}
export const service = new Taskservice();
