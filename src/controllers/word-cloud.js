import express from 'express'

import { getWordCloud } from '../services/word-cloud.js'

export const wordCloudRouter = express.Router();

const WordCloud = async (req, res) => {
    try {
        const amount = req.params.amount
        const wordCloud = await getWordCloud(Number(amount))
        res.status(200).json(wordCloud)
    } catch (err) {
        res.status(500).send('Internal server error')
    }
}

wordCloudRouter.get('/wordCloud/:amount', WordCloud)



