import { fetchClassNamerData } from '../dal/class-namer.js'

export const generateQueries = (amount) => {
    return Array(100).fill(0).map(index => fetchClassNamerData());
}

export const mapWords = (words) => {
    const wordsDictionary = {}
    words.forEach(word => {
        wordsDictionary[word] ? wordsDictionary[word]++ : wordsDictionary[word] = 1
    });
    return wordsDictionary
}
