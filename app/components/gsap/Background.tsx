/**
 * Background.tsx
 * 
 * Star and sky background images for interactive
 */

import Stars from "./Stars"
import styles from './Background.module.scss'
import { RefObject } from "react"
import { useGSAP } from "@gsap/react"

const Background = (props: { timeline: RefObject<gsap.core.Timeline | null> }) => {
    useGSAP(() => {
        if (props.timeline?.current) {
            // Scroll star layer (faster)
            props.timeline.current.to(
                ".gsap__stars-layer",
                {
                    y: "-40%",
                    ease: "sine.inOut",
                    duration: 1
                },
                .9
            )

            // Scro;l sky background layer (slower)
            props.timeline.current.to(
                ".gsap__background-layer",
                {
                    y: "-30%",
                    ease: "linear",
                    duration: 1
                },
                .9
            )
        }
    }, [props.timeline])

    return (
        <div>
            {/* Background Sky */}
            <img 
                className={`gsap__background-layer ${styles.background__image}`}
                alt='Night sky gradient from black, maroon, to purple'
                src='/images/background.png' />
            
            <Stars />
        </div>
    )
}

export default Background
