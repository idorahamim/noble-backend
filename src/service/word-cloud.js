import { generateQueries, mapWords } from './utils.js';
import { getWords } from './parser/class-namer-parser.js';

export const getWordCloud = async (amount) => {
    const queries = generateQueries(amount)
    const queriesData = await Promise.allSettled(queries)
    const words = getWords(queriesData)
    const mappedWords = mapWords(words)
    return mappedWords
}
