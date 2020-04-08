import express from 'express'
import data from './data'

const app = express()

app.get("/api/products", (req, res) => {
    res.send(data.products)
})

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})
// first parameter is what server you want to run on. second is what you want it to say once it is run successfully