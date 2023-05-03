import './post.css'


const PostArticle = ({ title, description }) => {
    
    return(
        <>
                <div className="post__article">
                    <span>{title}</span>
                    <p>{description}</p>
                </div>
        </>
    )
}

export default PostArticle