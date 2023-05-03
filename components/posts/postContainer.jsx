import './post.css'


const PostContainer = (props) => {
    const { children, propFake } = props
    return(
        <>
            <h4>POSTS</h4>
            <div className={propFake}>
                {children}
            </div>
        </>
    )
}

export default PostContainer