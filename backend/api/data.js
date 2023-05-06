const express = require("express");
const router = express.Router();
const Data = require("../models/data");

router.get("/data", async (req, res, next) => {
	try {
		const data = await Data.find({});
		res.status(200).json(data);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
