const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://chaitu:repakula@task-manager.qt9mon2.mongodb.net/task-manager?retryWrites=true&w=majority&appName=Task-Manager"
  )
  .then(() => console.log("DB connected successfully"))
  .catch((e) => console.log(e));

const taskRoutes = require("./routes/task.route");
app.use("/tasks", taskRoutes);
const port = 8082;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
