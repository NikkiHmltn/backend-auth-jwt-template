require("dotenv").config();
/* ==== Imports and Instances ====*/
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

/* ==== Configuration ==== */
const PORT = process.env.PORT || 4000

/* ==== Middleware ==== */
app.use(cors()); // Cors is set up to allow ALL address access to this api. If this is not the setting you want, please refer to cors documentation to adjust it to fit your needs. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ====  Routes & Controllers  ==== */
app.use("/api", routes);

app.use((req, res, next) => {
	res.send("This is not a route. Check your path.");
});

/* ====  Server Listener  ==== */
app.listen(PORT, () => {
	console.log(`server live on port: ${PORT}`);
});