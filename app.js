const express = require('express')
const app = express()
const port = 3000
// console.log(app);
app.get('/', (req, res,) => {
  res.send('Hello World!');

})

app.get('/', (req, res) => {
  res.send('information')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// route handler
app.get('/hello', (req, res) => {
  res.send("hello again")
})

app.get('/fruits', (req, res) => {
  let title = "<h1>my fruits</h1>"
  let citrus = `<h2>citrus</h2> <ul>${fruits.citrus.map(c => `<li>${c}</li>`).join("")}</ul>`
  res.send(title+citrus)
})

let fruits = {
  citrus: ["lemon", "orange"], 
  berries: ["blueberry", "cranberry"]
}

