/**
 * Clouds.tsx
 * 
 * Cloud background, runs on a different (slower) timeline than other elements
 */

import clsx from 'clsx'
import cloudStyles from './Clouds.module.scss'
import gsapStyles from './Container.module.scss'

const Clouds = () => {
    const CLOUD_COUNT = 8

    const renderCloud = (n: string, idx: number) => (
        <div
            key={`cloud_${idx}`}
            className={clsx(cloudStyles.cloud, cloudStyles[`cloud__${idx}`])}>
                <div
                    className={cloudStyles.cloud__image} // Class defines width, height, and position
                    style={{backgroundImage: `url(/images/cloud_0${idx + 1}.webp)`}} />
        </div>
    )

    return (
        <div 
            className={`${gsapStyles.gsap__component} gsap__cloud-layer`}>

            {/* Render all of the cloud images in images/ */}
            {(new Array(CLOUD_COUNT)).fill('').map(renderCloud)} 
        </div>
    )
}

export default Clouds
