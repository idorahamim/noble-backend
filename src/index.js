import cors from 'cors'
import express from 'express'

import { wordCloudRouter } from './controllers/word-cloud.js'

const PORT = 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use(wordCloudRouter)

app.listen(PORT, () => {
    console.log(`server run on port: ${PORT}`);
})

