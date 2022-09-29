export default class taskService {
  constructor() {
    this.tasks = [];
    this.getStorage = localStorage.getItem("items");
  }
  list = () => this.tasks;
  filterShow = () => this.tasks.filter((el) => !el.isCheck);
  filterHide = () => this.tasks.filter((el) => el.isCheck);

  createTask = (task) => {
    this.tasks = [...this.tasks, task];
    return task;
  };
  readTask = (id) => {
    const task = this.tasks.find((el) => el.id === id);
    return task;
  };
  updateTask = (upTask) => {
    const oldTask = this.tasks.find((el) => el.id === upTask.id);
    this.tasks.splice(oldTask.id, 1, upTask);
    return this.tasks;
  };
  deleteTask = (id) => {
    this.tasks.splice(id, 1);
    return this.tasks;
  };
}
