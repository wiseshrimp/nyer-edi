/**
 * Spotlights.tsx
 * 
 * Renders the left and right rotating spotlights
 */

import clsx from "clsx"
import styles from './Spotlights.module.scss'
import { RefObject, useEffect, useRef } from "react"
import { useGSAP } from "@gsap/react"

const Spotlights = (props: { timeline: gsap.core.Timeline | null }) => {
    useGSAP(() => {
        if (props.timeline) {
            /* 
                Left Spotlight
                    Starting Position: 0deg
                    Ending Position: 55deg
            */
            props.timeline.fromTo(
                "#spotlight__left",
                {
                    rotation: 0
                },
                {
                    keyframes: [ // Oscillates between invisible => visible => invisible
                        {
                            rotation: 55,
                            ease: "sine.out",
                            duration: 1
                        },
                        {
                            rotation: 0,
                            ease: "sine.out",
                            duration: 1
                        },
                    ]
                },
                0
            )

            /* 
                Right Spotlight
                    Starting position: 360deg
                    Ending position: 305deg
            */
            props.timeline.fromTo(
                "#spotlight__right",
                { rotation: 360 },
                {
                    keyframes: [ // Oscillates between invisible => visible => invisible
                        { rotation: 305, ease: "sine.out", duration: 1 },
                        { rotation: 360, ease: "sine.out", duration: 1 },
                    ],
                }, 0
            )
        }
    }, [props.timeline])

    return (
        <div
            className={`gsap__spotlight-layjr ${styles.spotlight__container}`}>
            <div
                className={clsx(styles.spotlight, styles.left)}>
                <img
                    id="spotlight__left"
                    src="/images/light.png" />
            </div>
            <div
                className={clsx(styles.spotlight, styles.right)}>
                <img
                    id="spotlight__right"
                    src="/images/light.png" />
            </div>
        </div>
    )
}

export default Spotlights
