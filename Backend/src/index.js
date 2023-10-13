const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const TaskRoutes = require("./routes/form.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use(TaskRoutes);
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(400);
console.log("esta funcionando");


