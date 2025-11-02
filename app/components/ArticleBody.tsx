/**
 * 
 * Article text that stops GSAP interactive scroll
 */
const ArticleBody = (props: {body: string}) => {
    return (
        <div className="article__body">
            <p>
                {props.body}
            </p>
        </div>
    )
}

export default ArticleBody
