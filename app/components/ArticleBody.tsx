'use client'
/**
 * 
 * Article text that stops GSAP interactive scroll
 */

import { ReactElement, useEffect, useRef } from 'react'
import styles from './ArticleBody.module.scss'

const ArticleBody = (props: {body: string}) => {
    const bodyRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {

        if (bodyRef?.current) {
            bodyRef.current.style.setProperty('opacity', '1')
        }
    }, [])

    return (
        <div 
            ref={bodyRef}
            className={`${styles.article__body}`}>
            <h6>
                Introduction
            </h6>
            <p
                className='article__body'>
                {props.body}
            </p>
        </div>
    )
}

export default ArticleBody
