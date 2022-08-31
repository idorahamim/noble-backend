import axios from 'axios'

const classNamerUrl = 'https://www.classnamer.org/'

export const fetchClassNamerData = async () => {
    const data = await axios.get(classNamerUrl)
    return data.data
}