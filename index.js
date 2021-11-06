const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const fs = require('fs')

app.use(express.urlencoded());
app.use(express.json());


app.get("/api", (req, res) => {

  fs.readFile('./clock.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(404)
    }
    res.json(data);
  })
});

app.post("/api-post", (req, res) => {

  const { id } = req.body
  try {
    let data = JSON.parse(fs.readFileSync('./clock.json', 'utf8'))

    data.res = data.res.filter(item => item.id != id)
    data.res.push(req.body)

    fs.writeFileSync('./clock.json', JSON.stringify(data))

    res.json(data);

  } catch (error) {

    res.status(404)
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});