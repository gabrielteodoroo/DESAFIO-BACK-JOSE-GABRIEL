import express from "express";
import "dotenv/config";
import router from "./router";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use(router);

const port = process.env.PORT || "3000";

app.listen(port, () => console.log(`Server running on port ${port}`));
