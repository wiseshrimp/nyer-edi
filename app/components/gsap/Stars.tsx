import gsapStyles from './Container.module.scss'

const Stars = () => {
    return (
        <div
            id="gsap__stars"
            className={gsapStyles.gsap__container}>
            <img 
                alt='White stars'
                src='/images/stars.png' />
        </div>
    )
}

export default Stars
