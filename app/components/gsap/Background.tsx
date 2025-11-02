/**
 * Background.tsx
 * 
 * Star and sky background images for interactive
 */

import Stars from "./Stars"
import styles from './Background.module.scss'
const Background = () => {
    return (
        <div>
            {/* Background sky */}
            <img 
                className={`gsap__background-layer ${styles.background__image}`}
                alt='Night sky gradient from black, maroon, to purple'
                src='/images/background.png' />
            
            <Stars />
        </div>
    )
}

export default Background
