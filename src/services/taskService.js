export default class Taskservice {
  list = (filter) => {
    const data = localStorage.getItem("items");
    if (data) {
      const tasks = [...JSON.parse(data)];
      switch (filter) {
        case "show":
          return tasks.filter((task) => !task.isCompleted);
        case "hide":
          return tasks.filter((task) => task.isCompleted);
        default:
          return tasks;
      }
    }
    return [];
  };

  createTask = (task) => {
    task.id = new Date().getMilliseconds();
    const tasks = [...this.list(), task];
    localStorage.setItem("items", JSON.stringify(tasks));
    return task;
  };

  readTask = (id) => {
    const data = localStorage.getItem("items");
    if (data) {
      const tasks = [...JSON.parse(data)];
      const task = tasks.find((el) => el.id === id);
      return task;
    }
    return undefined;
  };

  updateTask = ({ index, msg, isCompleted }) => {
    const tasks = this.list();
    const newList = tasks.find((el) => el.id === index);
    const findeIndex = tasks.findIndex((el) => el.id === newList.id);
    newList.content = msg;
    newList.isCompleted = isCompleted;
    tasks.splice(findeIndex, 1, newList);
    localStorage.setItem("items", JSON.stringify(tasks));
    return tasks;
  };

  deleteTask = (ids) => {
    const newTasks = this.list().filter((el) => !ids.includes(el.id));
    localStorage.setItem("items", JSON.stringify(newTasks));
    return newTasks;
  };
}
export const service = new Taskservice();
