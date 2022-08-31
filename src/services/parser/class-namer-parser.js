
import { parse } from 'node-html-parser';


const extractWords = (parsedData) => {
    return parsedData.map((data) => parseClassNamer(data.getElementById('classname').textContent))
}

const parseQueriesData = (queriesData) => {
    return queriesData.filter((item) => item.status === 'fulfilled').map((item) => parse(item.value))
}

const parseClassNamer = (className) => {
    return className.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
}

export const getWords = (queriesData) => {
    const parsedData = parseQueriesData(queriesData)
    const words = extractWords(parsedData)
    return words.flat()
}