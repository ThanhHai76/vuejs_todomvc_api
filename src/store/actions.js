import axios from "axios";
const LOCAL_STORAGE_KEY = "todo-app-vue";
export default {
  register(context, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/auth/register", {
          username: data.name,
          password: data.password,
        })
        .then((response) => {
          context.commit("register", response.data);
          resolve(response);
        })
        .catch((error) => {
          context.commit("register", error.response.data);
          reject(error);
        });
    });
  },
  login(context, credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post("/auth/login", {
          username: credentials.username,
          password: credentials.password,
        })
        .then((response) => {
          const token = response.data.token;
          const user_name = response.data.username;
          localStorage.setItem("access_token", token);
          localStorage.setItem("user_todo", user_name);
          context.commit("login", token);
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  destroyToken(context) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + context.state.token;
    if (context.getters.loggedIn) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_todo");
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      context.commit("destroyToken");
    }
  },
  getTodos(context) {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + context.state.token;

    axios
      .get("/api/todos")
      .then((response) => {
        context.commit("getTodos", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  clearTodos(context) {
    context.commit("clearTodos");
  },
  addTodo(context, todo) {
    axios
      .post("/api/todos", {
        content: todo.content,
        status: todo.status,
      })
      .then((response) => {
        context.commit("addTodo", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  checkAll(context, status) {
    context.commit("checkAll", status);
  },
  updateTodo({ commit }, todo) {
    axios
      .put("/api/todos/" + todo.id, {
        content: todo.content,
        status: todo.status,
      })
      .then((response) => {
        commit("updateTodo", todo);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteTodo({ commit }, todo) {
    axios
      .delete("/api/todos/" + todo.id)
      .then((response) => {
        commit("deleteTodo", todo);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  clearCompleted(context) {
    context.getters.completedTodos.forEach((todo) => {
      axios
        .delete("/api/todos/" + todo.id)
        .then((response) => {
          context.commit("clearCompleted");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  filteredTodo({ commit }, status) {
    commit("filteredTodo", status);
  },
};
