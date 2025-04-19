import express from "express";
import cors from "cors";

import rootRouter from "./src/routes/root.js";
import listRouter from "./src/routes/listRoute.js";

const app = express();
const port = process.env.HTTPPORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', rootRouter);
app.use('/items', listRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});