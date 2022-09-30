export default class Taskservice {
  constructor() {
    this.tasks = [];
    this.index = [];
  }
  list = () => {
    const data = localStorage.getItem("items");
    if (data) {
      this.tasks = [...JSON.parse(data)];
    }
    return this.tasks;
  };
  filterShow = () => this.tasks.filter((el) => !el.isCheck);

  filterHide = () => this.tasks.filter((el) => el.isCheck);

  getCheck = (task) => {
    this.tasks.splice(task.id, 1, task);
    localStorage.setItem("items", JSON.stringify(this.tasks));
  };
  createTask = (task) => {
    this.tasks = [...this.tasks, task];
    localStorage.setItem("items", JSON.stringify(this.tasks));
    return task;
  };

  readTask = (id) => {
    const task = this.tasks.find((el) => el.id === id);
    return task;
  };

  updateTask = (index, msg) => {
    console.log("index", index);
    console.log("msg", msg);
    const newList = this.tasks.find((el) => el.id === index);
    newList.content = msg;
    this.tasks.splice(index, 1, newList);
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
