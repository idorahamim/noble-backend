export const mapWords = (words) => {
    const wordsDictionary = {}
    words.forEach(word => {
        wordsDictionary[word] ? wordsDictionary[word]++ : wordsDictionary[word] = 1
    });
    return wordsDictionary
}
