const express =require('express')
var cors = require('cors')
const db = require('./db')
const apiRouter = require('./routes/apiRouter')


const PORT = process.env.PORT || 8000

const app = express()
app.use(cors())
app.use(express.json())


app.use('/api', apiRouter)

app.get('/test', async (req, res) => {
    const posts = await db.query(`SELECT * FROM users`)
    //console.log(posts.rows)
    res.json(posts.rows)
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
    
})
