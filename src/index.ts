import express from "express";
import "dotenv";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server running`));
