const express = require('express')
const path = require('path');
const app = express()
const port = 8016;

app.use(express.static(path.join(__dirname, 'Webpages')));

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, 'Webpages', 'homepage.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})