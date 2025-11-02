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

gsap.registerPlugin(ScrollTrigger);

const GSAPContainer = () => {
    const timelineRef = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        // Main timeline
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.gsap__background', // Wrapper holding background and article cover header
                endTrigger: '.article__body', // Ends at article body text
                start: 'top top',
                end: '+=450%',
                scrub: 1,
                pin: true,
                pinSpacing: true,
            }
        })

        timelineRef.current = timeline

        timeline.to(
            ".gsap__cloud-layer",
            {
                y: "-20vh",
                ease: "sine.inOut",
                duration: 1
            },
            .9
        )

        timeline.to(
            ".gsap__article-layer",
            {
                y: "-70%",
                ease: "sine.inOut",
                duration: 1
            },
            .9
        )

        timeline.to(
            ".gsap__stars-layer",
            {
                y: "-40%",
                ease: "sine.inOut",
                duration: 1
            },
            .9
        )
        timeline.to(
            ".gsap__background-layer",
            {
                y: "-30%",
                ease: "linear",
                duration: 1
            },
            .9
        )
    }, [])

    return (
        <div className={styles.container}>
            <div
                className={'gsap__background'}>
                <Background />
                <Clouds />
                <ArticleHeader
                    article={{ ...textJson }} />
            </div>
            <ArticleBody
                body={textJson['Introduction']} />
        </div>
    )
}

export default GSAPContainer
