import express from "express";
import router from "./routes/routes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import swaggerDocs from "./utils/swagger.js";
import path from "path";

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.sendFile(
    path.join(process.cwd(), "public", "index.html")

  );
});

app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server started")
  swaggerDocs(app, PORT)
});
