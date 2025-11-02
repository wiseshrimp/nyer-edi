/**
 * Container.tsx
 * 
 * Contains all GSAP animated elements: Background (sky and stars), clouds, and article header.
 * Rendered in order of z-index
 */

import ArticleHeader from '../ArticleHeader'
import Background from './Background'
import Clouds from './Clouds'
import textJson from '@/app/assets/text/text.json'

const GSAPContainer = () => {
    return (
        <div>
            <Background />
            <Clouds />
            <ArticleHeader
                article={{...textJson}} />
        </div>
    )
}

export default GSAPContainer
