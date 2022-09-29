export default class taskService {
  constructor() {
    this.tasks = [];
  }
  filterShow = (array) => array.filter((el) => !el.isCheck);
  filterHide = (array) => array.filter((el) => el.isCheck);

  createTask = (task) => {
    this.tasks = [...this.tasks, task];
    return task;
  };
  readTask = (id) => {
    const task = this.tasks.find((el) => el.id === id);
    return task;
  };
  updateTask = ({ arrayTask, index, msg }) => {
    const newTask = arrayTask[index];
    newTask.content = msg;
  };
  deleteTask = (arrayTask) => {
    return arrayTask.filter((el) => !el.isCheck);
  };
}
