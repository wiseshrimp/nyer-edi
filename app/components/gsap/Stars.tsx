import { useGSAP } from '@gsap/react';
import gsapStyles from './Container.module.scss'
import gsap from 'gsap'
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
