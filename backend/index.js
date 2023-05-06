require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

let corsOptions = {
	origin: true,
};

app.use(cors(corsOptions));

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "portfolio",
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Error connecting to MongoDB", err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());

const router = require("./api/data");

app.use("/", router);

app.listen(process.env.PORT || 8080, () => {
	console.log("Listening...");
});

module.exports = app;
