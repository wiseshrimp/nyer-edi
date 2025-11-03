'use client'
/**
 * Container.tsx
 * 
 * Contains all GSAP animated elements: Background (sky and stars), clouds, and article header.
 */
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from 'react'
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
    const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        // GSAP timeline and pin container to top
        const gsapTimeline = gsap.timeline({
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
        setTimeline(gsapTimeline)
    }, [])

    return (
        <div className={styles.container}>
            {/* GSAP Pinned Component */}
            <div
                className="gsap__background">
                <Spotlights
                    timeline={timeline} />
                <Background
                    timeline={timeline} />
                <Clouds 
                    timeline={timeline} />
                <ArticleHeader
                    timeline={timeline}
                    article={{ ...textJson }} />
            </div>

        </div>
    )
}

export default GSAPContainer
