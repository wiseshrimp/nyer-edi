/**
 * ArticleHeader.tsx
 * 
 * Cover text overlay on top of interactive media with article title, byline, and dek
 */

import React, { RefObject, useMemo } from 'react'
import styles from './ArticleHeader.module.scss'
import FacebookIcon from './icons/Facebook'
import EmailIcon from './icons/Email'
import TwitterIcon from './icons/Twitter'
import { useGSAP } from '@gsap/react'
import { parseTitle } from '../utils/parseTitle'

type Props = {
    article: {
        Rubric: string
        Headline: string
        Byline: string
        Dek: string
        'Publish Date': string
    }
    timeline: gsap.core.Timeline | null
}

const ArticleHeader = (props: Props) => {
    const title = useMemo(() => parseTitle(props.article?.Headline), [props.article?.Headline])

    useGSAP(() => {
        if (props.timeline) {
            props.timeline.to(
                ".gsap__article-layer",
                {
                    y: "-70%",
                    ease: "sine.inOut",
                    duration: 1
                },
                .9
            )
        }
    }, [props.timeline])
    return (
        <div
            className={
                `${styles.article__container} 
                gsap__article-layer article-header`
            }>
            <div
                className={styles.article__header}>
                    {/* Rubric */}
                    <h6
                        className={styles.rubric}>
                            {props.article.Rubric}
                    </h6>

                    {/* Title */}
                    <h1
                        className={styles.title}>
                        {/* To do: Separate articles */}
                            {title.map((el, idx) => <React.Fragment key={`title-${idx}`}>{el}</React.Fragment>)}
                    </h1>

                    {/* Dek */}
                    <div
                        className={styles.dek}>
                            {props.article.Dek}
                    </div>


                    {/* Date + Byline */}
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

                    {/* Icons */}
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
            </div>
        </div>
    )
}

export default ArticleHeader
