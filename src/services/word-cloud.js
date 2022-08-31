import { fetchClassNamerData } from '../dal/class-namer.js'
import { mapWords } from '../utils/word-utils.js';
import { getWords } from '../parsers/class-namer-parser.js';


const generateQueries = (amount) => {
    return Array(amount).fill(0).map(index => fetchClassNamerData());
}

export const getWordCloud = async (amount) => {
    const queries = generateQueries(amount)
    const queriesData = await Promise.allSettled(queries)
    const words = getWords(queriesData)
    const mappedWords = mapWords(words)
    return mappedWords
}
