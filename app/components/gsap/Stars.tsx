/**
 * Stars.tsx
 * 
 * Static star image
 * Renders star background layer – tiles the image so the stars don't get stretched out
 */

import gsapStyles from './Container.module.scss'
import styles from './Stars.module.scss'

const Stars = () => {
    return (
        <div
            className={`${gsapStyles.gsap__component}`}>
            <div
                className={`gsap__stars-layer ${styles.stars__image}`} />
        </div>
    )
}

export default Stars
