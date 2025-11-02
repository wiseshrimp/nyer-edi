const ARTICLES = new Set(["of", "the", "to", "and", "in", "for", "at", "on"])
export const isArticle = (word: string) => {
    return ARTICLES.has(word.toLowerCase())
}
