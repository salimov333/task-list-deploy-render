import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import taskRouter from "./routes/taskRouter.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // body parser erlaubt uns auf Daten aus dem req.body zuzugreifen

app.use("/tasks", taskRouter);

app.use((req, res, next) => {
    res.status(404).send("Page not found!");
});

app.use((err, req, res, next) => {
    console.log("General error handler", err);
    res.status(500).json(err);
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});