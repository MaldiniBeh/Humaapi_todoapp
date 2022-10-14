export default class Taskservice {
  baseUrl = "http://localhost:3001/api/v1/task/";
  fetchParam = (method, body) => {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };
  };
  list = async (filter) => {
    try {
      const res = await fetch(this.baseUrl, this.fetchParam("GET"));
      const tasks = await res.json().then((res) => res);
      console.log("task", tasks);
      switch (filter) {
        case "show":
          return tasks.filter((task) => !task.isCompleted);
        case "hide":
          return tasks.filter((task) => task.isCompleted);
        default:
          console.log("task", tasks);
          return tasks;
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  createTask = async (task) => {
    task.id = new Date().getMilliseconds();
    try {
      const res = await fetch(this.baseUrl, this.fetchParam("POST", task));
      return await res.json().then((res) => res);
    } catch (err) {
      console.log(err);
    }
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
