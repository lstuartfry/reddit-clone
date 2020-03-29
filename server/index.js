const express = require('express');
const redditRouter = require('./routes/reddit.routes');

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.use(express.static('../client/public'));

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies

app.use('/reddit', redditRouter);
