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
      const tasks = await res.json();
      switch (filter) {
        case "show":
          return tasks.filter((task) => !task.isCompleted);
        case "hide":
          return tasks.filter((task) => task.isCompleted);
        default:
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
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  readTask = async (id) => {
    try {
      const res = await fetch(`${this.baseUrl}${id}`, this.fetchParam("GET"));
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  updateTask = async (task) => {
    try {
      const res = await fetch(
        `${this.baseUrl}${task.id}`,
        this.fetchParam("PUT", task)
      );
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  deleteTask = async (ids) => {
    try {
      const deleteAll = ids.forEach(async (el) => {
        await fetch(`${this.baseUrl}${el}`, this.fetchParam("DELETE"));
      });
      await Promise.all([deleteAll]);
    } catch (error) {
      console.log(error);
    }
  };
}
export const service = new Taskservice();
