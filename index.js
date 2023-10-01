import express from 'express';
const app = express()
const port = process.env.PORT || 3000 ;
import config from 'config';
console.log(config);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/status', (req, res) => {
    res.send('ok')
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})