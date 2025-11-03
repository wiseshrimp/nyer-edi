/**
 * parseTitle.tsx
 * 
 * Splits a title string into JSX elements depending on the number of article words
 * Detects number of "small words": If there is only one small word, render it normally
 * If there are 2+ small words next to each other, render it as a smaller title
 * 
 * @param title Title string (e.g. "The Art of the Hollywood Memoir")
 * @returns An array of JSX nodes ready to render (e.g. [<span>The Art</span>, <span className="smalller">of the</span>])
 */

import { JSX } from "react"

const ARTICLES = new Set(["of", "the", "to", "and", "in", "for", "at", "on"])

export const parseTitle = (title: string) => {
    const words = title.split(' ')
    const titleArr : JSX.Element[] = []
    let currentArticles : string[] = []

    for (let idx = 0; idx < words.length; idx++) {
        const word = words[idx]
        if (!ARTICLES.has(word.toLowerCase())) {
            if (currentArticles.length) {
                if (currentArticles.length >= 2) {
                    titleArr.push(
                        <div className="smaller">
                            {currentArticles.join(' ')}
                        </div>
                    )
                }
                else {
                    currentArticles.forEach(article => titleArr.push(<span>{article}</span>))
                }
            }

            titleArr.push(
                <span>{word}</span>
            )
            currentArticles = []
        }
        else {
            currentArticles.push(word)
        }
    }

    if (currentArticles.length) {
        currentArticles.forEach(article => titleArr.push(<span>{article}</span>))
    }

    return titleArr
}
