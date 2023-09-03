const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://root:root@cluster0.5nxuahf.mongodb.net/store?retryWrites=true&w=majority')
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));