'use client'
/**
 * Container.tsx
 * 
 * Contains all GSAP animated elements: Background (sky and stars), clouds, and article header.
 */
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from 'react'
import ArticleHeader from '../ArticleHeader'
import Background from './Background'
import Clouds from './Clouds'
import textJson from '@/app/assets/text/text.json'
import styles from './Container.module.scss'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArticleBody from "../ArticleBody"
import Spotlights from "./Spotlights"

gsap.registerPlugin(ScrollTrigger);

const GSAPContainer = () => {
    const timelineRef = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.gsap__background', // Wrapper holding all of the moving elements
                endTrigger: '.article__body', // Ends at the beginning of article body text
                start: 'top top',
                end: '+=500%', // Scroll 5x to get to the end
                scrub: 2,
                pin: true,
                pinSpacing: true
            }
        })

        timelineRef.current = timeline
    }, [])

    return (
        <div className={styles.container}>
            {/* GSAP Pinned Component */}
            <div
                className="gsap__background">
                <Spotlights
                    timeline={timelineRef} />
                <Background
                    timeline={timelineRef} />
                <Clouds 
                    timeline={timelineRef} />
                <ArticleHeader
                    timeline={timelineRef}
                    article={{ ...textJson }} />
            </div>

            {/* Article Text – Unpins header */}
            <ArticleBody
                body={textJson['Introduction']} />
        </div>
    )
}

export default GSAPContainer
