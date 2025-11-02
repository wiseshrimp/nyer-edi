/**
 * ArticleHeader.tsx
 * 
 * Cover text overlay on top of interactive media with article title, byline, and dek
 */

import { useMemo } from 'react'
import styles from './ArticleHeader.module.scss'
import FacebookIcon from './icons/Facebook'
import EmailIcon from './icons/Email'
import TwitterIcon from './icons/Twitter'

type Props = {
    article: {
        Rubric: string
        Headline: string
        Byline: string
        Dek: string
        'Publish Date': string
    }
}

const ArticleHeader = (props: Props) => {
    return (
        <div
            className={styles.article__container}>
                <div
                    className={styles.article__header}>
                    <h6
                        className={styles.rubric}>
                        {props.article.Rubric}
                    </h6>

                    <h1
                        className={styles.title}>
                        {/* To do: Separate articles */}
                        {props.article.Headline}
                    </h1>

                    <div
                        className={styles.dek}>
                        {props.article.Dek}
                    </div>


                    <div>
                        <div
                            className={styles.byline}>
                            {props.article.Byline}
                        </div>
                        <div
                            className={styles.date}>
                            {props.article['Publish Date']}
                        </div>


                    </div>
                    <div className={styles.icon__container}>
                        <div className={styles.icon}>
                            <FacebookIcon />
                        </div>
                        <div className={styles.icon}>
                            <TwitterIcon />
                        </div>
                        <div className={styles.icon}>
                            <EmailIcon />
                        </div>
                    </div>
                    {/* Icons */}
                </div>
        </div>
    )
}

export default ArticleHeader
