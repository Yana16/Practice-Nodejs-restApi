const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = require("./routes/api/contacts");

const app = express();

const formatLogger = app.get('env') === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", router);

app.use((req, res) => {
res.status(404).json({message: "Not found"});
});

app.use()