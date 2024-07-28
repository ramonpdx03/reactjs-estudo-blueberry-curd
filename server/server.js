import express from "express";
import cors from "cors";
import 'dotenv/config';

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

//# Routes
app.get('/api', (req, res) => res.status(200).json("Hello World!"));

app.listen(process.env.SERVER_PORT, () => console.log(`Server is running on port ${process.env.SERVER_PORT}`));
