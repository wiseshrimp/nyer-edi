/**
 * Background.tsx
 * 
 * Star and sky background images for interactive
 */

import Stars from "./Stars"
import gsapStyles from './Container.module.scss'

const Background = () => {
    return (
        <div
            className={gsapStyles.gsap__container}
            id="gsap__background">

                {/* Background sky */}
                <img 
                    alt='Night sky gradient from black, maroon, to purple'
                    src='/images/background.png' />
                <Stars />
        </div>
    )
}

export default Background
